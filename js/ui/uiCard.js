import { dateFormatted } from '../utils/index.js'

export default function uiCard(item) {
  const article = document.createElement('article')
  article.classList.add('fade-in')
  article.innerHTML = /* html */ `
    <h3>${item.title}</h3>
    <img src="${item.image}" alt="${item.title}" />
    <small>${dateFormatted(item.createdAt)}</small>
  `
  document.querySelector('#container').appendChild(article)
}
