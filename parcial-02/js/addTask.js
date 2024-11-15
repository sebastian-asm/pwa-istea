import { useFetch, PENDING, SUCCESS_MESSAGE, ERROR_MESSAGE, ERROR_FORM_MESSAGE } from './utils/index.js'
import { uiNavbar, uiAlert } from './ui/index.js'

const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancel-button')
const saveButton = document.querySelector('#save-button')
const container = document.querySelector('#container')

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
    return uiAlert(ERROR_FORM_MESSAGE, 'error', container)

  const newTask = {
    title: formObject.title,
    description: formObject.description,
    createdAt: new Date().getTime(),
    finishedAt: null,
    status: PENDING
  }
  disabledForm(true)
  const taskDb = await useFetch.saveTask(newTask)
  if (!taskDb) {
    uiAlert(ERROR_MESSAGE, 'error', container)
    disabledForm(false)
    return
  }
  uiAlert(SUCCESS_MESSAGE, 'success', container)
  disabledForm(false)
  form.reset()
}

function disabledForm(value) {
  saveButton.textContent = value ? 'Guardando...' : 'Guardar'
  for (const element of form.elements) element.disabled = value
}

init()
