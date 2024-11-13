import { ERROR_MESSAGE } from '../utils/index.js'

export default function uiError() {
  const div = document.createElement('div')
  div.classList.add('error', 'fade-in')
  div.innerHTML = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 9v-1a3 3 0 0 1 6 0v1"></path>
      <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"></path>
      <path d="M3 13l4 0"></path>
      <path d="M17 13l4 0"></path>
      <path d="M12 20l0 -6"></path>
      <path d="M4 19l3.35 -2"></path>
      <path d="M20 19l-3.35 -2"></path>
      <path d="M4 7l3.75 2.4"></path>
      <path d="M20 7l-3.75 2.4"></path>
    </svg>
    <p>${ERROR_MESSAGE}</p>
  `
  document.querySelector('#container').appendChild(div)
}
