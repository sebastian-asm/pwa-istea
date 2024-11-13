const iconError = /* html */ `
  <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
    <path d="M9 10h.01"></path>
    <path d="M15 10h.01"></path>
    <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0"></path>
  </svg>
`

const iconSuccess = /* html */ `
  <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
    <path d="M9 10l.01 0"></path>
    <path d="M15 10l.01 0"></path>
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
  </svg>
`

export default function alert(message, type, element) {
  const id = message.replace(/[^a-zA-Z0-9]/g, '')
  if (document.querySelector(`#${id}`)) return
  const success = type === 'success'
  const divAlert = document.createElement('div')
  divAlert.id = id
  divAlert.classList.add('alert', 'fade-in', success ? 'alert-success' : 'alert-error')
  divAlert.innerHTML = /* html */ `
    ${success ? iconSuccess : iconError}
    <p>${message}</p>
  `
  element.insertAdjacentElement('afterbegin', divAlert)
  setTimeout(() => divAlert.remove(), 4000)
}
