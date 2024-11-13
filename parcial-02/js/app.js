import { FINISHED, PENDING, useFetch } from './utils/index.js'
import { uiLoading, uiEmpty, uiError, uiCard, uiModal, uiNavbar, uiToast } from './ui/index.js'

const container = document.querySelector('#container')
const modal = document.querySelector('#modal')

function init() {
  renderTasks()
  uiNavbar()
}

async function renderTasks() {
  container.innerHTML = ''
  uiLoading(true, container)
  const { pendingTasks, finishedTasks } = await useFetch.getTasks()
  uiLoading(false, container)
  if (!pendingTasks && !finishedTasks) return uiError()
  if (pendingTasks.length === 0 && finishedTasks.length === 0) return uiEmpty()
  renderTasksByStatus(pendingTasks, PENDING)
  renderTasksByStatus(finishedTasks, FINISHED)
  selectTask()
}

function selectTask() {
  const idsTasks = document.querySelectorAll('h3')
  for (const idTask of idsTasks) idTask.addEventListener('click', modalTask)
}

async function modalTask(event) {
  modal.innerHTML = ''
  const { id } = event.target
  modal.showModal()
  uiLoading(true, modal)
  const task = await useFetch.getTask(id)
  uiLoading(false, modal)
  if (!task) {
    // toast de error
    modal.close()
    return
  }
  modal.innerHTML = uiModal(task)
  const form = document.querySelector('form')
  const closeModal = document.querySelector('#closeModal')
  form.addEventListener('submit', (event) => updateTask(event, id))
  closeModal.addEventListener('click', () => modal.close())
}

async function updateTask(event, id) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const formObject = Object.fromEntries(formData.entries())
  if (formObject.title.trim() === '' || formObject.description.trim() === '')
    return uiToast('Complete todos los campos por favor', 'toast-error')

  const updateTask = {
    title: formObject.title,
    description: formObject.description,
    status: formObject.status ? FINISHED : PENDING,
    finishedAt: formObject.status ? new Date().getTime() : null
  }
  const task = await useFetch.updateTask(id, updateTask)
  if (!task) {
    // toast de error
    return
  }
  modal.close()
  await renderTasks()
}

function renderTasksByStatus(tasks, status) {
  const section = document.createElement('section')
  const div = document.createElement('div')
  const title = document.createElement('h2')
  section.classList.add('fade-in')
  div.classList.add('container-cards')
  title.textContent = `${status === PENDING ? 'Pendientes' : 'Finalizadas'} (${tasks.length})`
  for (const task of tasks) div.appendChild(uiCard(task))
  section.append(title, div)
  container.appendChild(section)
}

init()
