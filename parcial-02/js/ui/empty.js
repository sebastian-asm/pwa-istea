export default function uiEmpty() {
  const div = document.createElement('div')
  div.classList.add('empty', 'fade-in')
  div.innerHTML = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 20l7 -7"></path>
      <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>
    </svg>
    <p>
      Aún no tienes tareas guardadas, puedes <strong><a href="./add-task.html">crear una nueva</a></strong>
    </p>
  `
  document.querySelector('#container').appendChild(div)
}
