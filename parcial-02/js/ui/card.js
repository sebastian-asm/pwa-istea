import { dateFormatted, PENDING } from '../utils/index.js'

export default function card(task) {
  const iconPlay = /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M7 4v16l13 -8z"></path>
    </svg>
  `

  const iconCheck = /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
      <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
      <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
      <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
      <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
      <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
      <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
      <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
      <path d="M9 12l2 2l4 -4"></path>
    </svg>
  `

  const article = document.createElement('article')
  const title = task.title.length > 22 ? `${task.title.slice(0, 22)}...` : task.title
  const pending = task.status === PENDING
  const dateTask = pending
    ? `<small>Creada el ${dateFormatted(task.createdAt)}</small>`
    : `<small>Finalizada el ${dateFormatted(task.finishedAt)}</small>`

  article.classList.add(task.status)
  article.innerHTML = /* html */ `
    <div>
      <h3>${title}</h3>
      ${dateTask}
    </div>
    ${pending ? iconPlay : iconCheck}
  `
  return article
}
