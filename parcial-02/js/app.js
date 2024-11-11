import { FINISHED, getTasks, PENDING } from './utils/index.js'
import { loading, empty, error, card } from './ui/index.js'

const container = document.querySelector('#container')

function init() {
  renderTasks()
}

async function renderTasks() {
  loading(true)
  const tasks = await getTasks()
  loading(false)
  if (!tasks) return error()
  if (tasks.length === 0) return empty()
  filterTasksByStatus(tasks, PENDING)
  filterTasksByStatus(tasks, FINISHED)
}

function filterTasksByStatus(tasks, status) {
  const filterTasks = tasks.filter((task) => task.status === status)
  const section = document.createElement('section')
  const div = document.createElement('div')
  const title = document.createElement('h2')
  section.classList.add('fade-in')
  div.classList.add('container-cards')
  title.textContent = `${status === PENDING ? 'Pendientes' : 'Finalizadas'} (${filterTasks.length})`
  filterTasks.forEach((task) => div.appendChild(card(task)))
  section.append(title, div)
  container.appendChild(section)
}

init()
