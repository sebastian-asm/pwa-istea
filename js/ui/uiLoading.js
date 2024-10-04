export default function uiLoading(active = true) {
  const div = document.createElement('div')
  div.classList.add('loading', 'fade-in')
  div.id = 'loading'
  if (active) {
    div.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="6" x2="12" y2="3" />
        <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
        <line x1="18" y1="12" x2="21" y2="12" />
        <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
        <line x1="12" y1="18" x2="12" y2="21" />
        <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
        <line x1="6" y1="12" x2="3" y2="12" />
        <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
      </svg>
      <p>¡Cargando feed!</p>
    `
    document.querySelector('#container').appendChild(div)
  } else {
    document.querySelector('#loading').remove()
  }
}
