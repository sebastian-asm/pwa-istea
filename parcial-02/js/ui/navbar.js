export default function navbarToggle() {
  const navbarMobile = document.querySelector('#navbar-mobile')
  const iconOpen = document.querySelector('#icon-open')
  const iconClose = document.querySelector('#icon-close')
  iconOpen.addEventListener('click', () => {
    navbarMobile.style.right = 0
    document.querySelector('main').style.filter = 'blur(8px)'
    document.querySelector('h1').style.filter = 'blur(8px)'
  })
  iconClose.addEventListener('click', () => {
    navbarMobile.style.right = '-320px'
    document.querySelector('main').style.filter = 'blur(0)'
    document.querySelector('h1').style.filter = 'blur(0)'
  })
}
