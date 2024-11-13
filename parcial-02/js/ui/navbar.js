export default function navbarToggle() {
  const navbarMobile = document.querySelector('#navbar-mobile')
  const iconOpen = document.querySelector('#icon-open')
  const iconClose = document.querySelector('#icon-close')
  iconOpen.addEventListener('click', () => (navbarMobile.style.right = 0))
  iconClose.addEventListener('click', () => (navbarMobile.style.right = '-320px'))
}
