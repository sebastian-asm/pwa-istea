import { dateFormatted, PENDING } from '../utils/index.js'
import { uiIcons } from '../ui/index.js'

export default function uiCard(task) {
  const article = document.createElement('article')
  const title = task.title.length > 22 ? `${task.title.slice(0, 22)}...` : task.title
  const pending = task.status === PENDING
  const dateTask = pending
    ? `<small>Creada el ${dateFormatted(task.createdAt)}</small>`
    : `<small>Finalizada el ${dateFormatted(task.finishedAt)}</small>`

  article.classList.add(task.status)
  article.innerHTML = /* html */ `
    <div>
      <h3 id="${task.id}">${title}</h3>
      ${dateTask}
    </div>
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      ${pending ? uiIcons.volume : uiIcons.check}
    </svg>
  `
  return article
}
