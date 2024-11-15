import { uiIcons } from './index.js'

export default function alert(message, type, element) {
  const id = message.replace(/[^a-zA-Z0-9]/g, '')
  if (document.querySelector(`#${id}`)) return
  const success = type === 'success'
  const divAlert = document.createElement('div')
  divAlert.id = id
  divAlert.classList.add('alert', 'fade-in', success ? 'alert-success' : 'alert-error')
  divAlert.innerHTML = /* html */ `
    ${success ? uiIcons.success : uiIcons.error}
    <p>${message}</p>
  `
  element.insertAdjacentElement('afterbegin', divAlert)
  setTimeout(() => divAlert.remove(), 4000)
}
