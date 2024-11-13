import { useFetch, PENDING, SUCCESS_MESSAGE, ERROR_MESSAGE } from './utils/index.js'
import { uiToast, uiNavbar } from './ui/index.js'

const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancelButton')
const saveButton = document.querySelector('#saveButton')

function init() {
  form.addEventListener('submit', addTask)
  cancelButton.addEventListener('click', () => (location.href = 'index.html'))
  uiNavbar()
}

async function addTask(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const formObject = Object.fromEntries(formData.entries())
  if (formObject.title.trim() === '' || formObject.description.trim() === '')
    return uiToast('Complete todos los campos por favor', 'toast-error')

  const newTask = {
    title: formObject.title,
    description: formObject.description,
    createdAt: new Date().getTime(),
    finishedAt: null,
    status: PENDING
  }
  disabledForm(true)
  const taskDb = await useFetch.saveTask(newTask)
  if (!taskDb) return uiToast(ERROR_MESSAGE, 'toast-error')
  uiToast(SUCCESS_MESSAGE)
  disabledForm(false)
  form.reset()
}

function disabledForm(value) {
  saveButton.textContent = value ? 'Guardando...' : 'Guardar'
  for (const element of form.elements) element.disabled = value
}

init()
