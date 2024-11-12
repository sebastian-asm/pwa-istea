import { useFetch, toast, PENDING, SUCCESS_MESSAGE, ERROR_MESSAGE, navbarToggle } from './utils/index.js'

const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancelButton')
const saveButton = document.querySelector('#saveButton')

function init() {
  form.addEventListener('submit', addTask)
  cancelButton.addEventListener('click', () => (location.href = 'index.html'))
  navbarToggle()
}

async function addTask(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const formObject = Object.fromEntries(formData.entries())
  console.log(formObject)
  if (formObject.title.trim() === '' || formObject.description.trim() === '')
    return toast('Complete todos los campos por favor', 'toast-error')

  const newTask = {
    title: formObject.title,
    description: formObject.description,
    createdAt: new Date().getTime(),
    finishedAt: null,
    status: PENDING
  }
  disabledForm(true)
  const taskDb = await useFetch.saveTask(newTask)
  if (!taskDb) return toast(ERROR_MESSAGE, 'toast-error')
  toast(SUCCESS_MESSAGE)
  disabledForm(false)
  form.reset()
}

function disabledForm(value) {
  saveButton.textContent = value ? 'Guardando...' : 'Guardar'
  for (const element of form.elements) element.disabled = value
}

init()
