import {removeLoader} from './loader.js'

const postsContainer = document.querySelector('.posts')
const postsBody = document.querySelector('.posts__body')
const loaderName = 'posts__loader'

export function showPosts(posts) {
  removeLoader(postsContainer, postsBody, loaderName)
  appendPosts(posts.data)
  createPagination({current: posts.meta.pagination.page, last: posts.meta.pagination.pages})
}

function appendPosts(posts) {
  const list = document.querySelector('.posts__list')

  list.textContent = ''
  list.append(...posts.map(article => createListItem(article)))
  // list.append(...posts.map(post => createListItem(post)).filter((item, index) => index < 5))

}

function createPagination({current, last}) {
  const numCurrent = document.getElementById('numCurrent')
  const numLast = document.getElementById('numLast')
  const linkPrev = document.getElementById('linkPrev')
  const linkNext = document.getElementById('linkNext')

  numCurrent.textContent = current
  numLast.textContent = last

  let prev = Math.max(current - 1, 1)
  let next = Math.min(current + 1, last)

  linkPrev.href = prev === 1 ? `index.html` : `index.html?page=${prev}`
  linkNext.href = `index.html?page=${next}`
}  

function createListItem({id, title}) {
  const li = document.createElement('li')
  li.classList.add('posts__item')

  li.innerHTML = `<a href="post.html?id=${id}" class="posts__link link">
  <span class="posts__title">${title}</span></a>`

  return li
}