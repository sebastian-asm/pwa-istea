import { post } from './utils/useFetch.js'

function init() {
  const form = document.querySelector('form')
  form.addEventListener('submit', addTask)
}

async function addTask(event) {
  event.preventDefault()
  const title = document.querySelector('#title')
  const description = document.querySelector('#description')
  if (title.value.trim() === '' || description.value.trim() === '') return
  const body = {
    title: title.value,
    description: description.value,
    createdAt: new Date().getTime(),
    finishedAt: null,
    status: 'pending'
  }
  disabledButtons(true)
  const response = await post(body)
  disabledButtons(false)
  console.log(response)
}

function disabledButtons(value) {
  const resetButton = document.querySelector('#resetButton')
  const addButton = document.querySelector('#addButton')
  resetButton.disabled = value
  addButton.disabled = value
}

init()
