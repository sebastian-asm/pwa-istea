import { uiNotFeed, uiCard, uiLoading } from './ui/index.js'
import { getFeed, addFeed, imageToBase64, networkStatus } from './utils/index.js'

const container = document.querySelector('#container')
const modal = document.querySelector('#modal')

function app() {
  renderFeed()
  handleCameraClick()
}

async function renderFeed() {
  container.innerHTML = ''
  uiLoading()
  const feed = await getFeed()
  if (!feed || feed.length === 0) uiNotFeed()
  else feed.forEach(uiCard)
  uiLoading(false)
}

function handleCameraClick() {
  const cameraInputFile = document.createElement('input')
  const cameraIcon = document.querySelector('#camera-icon')
  cameraInputFile.type = 'file'
  cameraInputFile.accept = 'image/*'
  cameraInputFile.capture = 'environment'
  cameraInputFile.addEventListener('change', handleChangeInput)
  cameraIcon.addEventListener('click', () => cameraInputFile.click())
}

function handleChangeInput({ target }) {
  const [file] = target.files
  if (file) {
    const imageBlob = URL.createObjectURL(file)
    uiModal(imageBlob)
    modal.showModal()
  }
}

function uiModal(imageBlob) {
  modal.classList.add('fade-in')
  modal.innerHTML = /* html */ `
    <h2>Publica esta foto</h2>
    <img src="${imageBlob}" alt="Vista previa" id="image-blob" class="fade-in" />
    <input type="text" placeholder="Título para la foto" id="input-title" autofocus />
    <div>
      <button type="button" id="cancel-button">Cancelar</button>
      <button type="button" id="publish-button">Publicar</button>
    </div>
  `
  container.appendChild(modal)
  const image = document.querySelector('#image-blob')
  const input = document.querySelector('#input-title')
  const cancelButton = document.querySelector('#cancel-button')
  const publishButton = document.querySelector('#publish-button')
  cancelButton.addEventListener('click', () => modal.close())
  publishButton.addEventListener('click', () => publishImage({ image, input }, { cancelButton, publishButton }))
  networkStatus(publishButton)
}

async function publishImage(publishData, buttonsRef) {
  const { image, input } = publishData
  const { cancelButton, publishButton } = buttonsRef
  const imageBase64 = imageToBase64(image)
  const newPublish = {
    image: imageBase64,
    title: input.value.trim(),
    createdAt: new Date().getTime()
  }
  input.disabled = true
  cancelButton.disabled = true
  publishButton.disabled = true
  publishButton.textContent = 'Publicando...'
  await addFeed(newPublish)
  renderFeed()
  modal.close()
}

// no es necesario usar DOMContentLoaded para ejecutar la función principal
// ya que al usar module o defer está definido que ninguna función se ejecutará
// hasta haber cargado todo el HTML
app()
