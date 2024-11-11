import { saveTask, toast, PENDING, SUCCESS_MESSAGE, ERROR_MESSAGE } from './utils/index.js'

const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancelButton')
const saveButton = document.querySelector('#saveButton')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

function init() {
  form.addEventListener('submit', addTask)
  cancelButton.addEventListener('click', () => (location.href = 'index.html'))
}

async function addTask(event) {
  event.preventDefault()
  if (title.value.trim() === '' || description.value.trim() === '')
    return toast('Complete todos los campos por favor', 'toast-error')

  const newTask = {
    title: title.value,
    description: description.value,
    createdAt: new Date().getTime(),
    finishedAt: null,
    status: PENDING
  }
  disabledForm(true)
  const taskDb = await saveTask(newTask)
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
