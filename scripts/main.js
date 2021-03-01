import {blurLinksAndButtons} from './blurLinksAndButtons.js'
import {loadPosts} from './loadPosts.js'
import {showPosts} from './showPosts.js'
import {showPost} from './showPost.js'
import {addLoader} from './loader.js'
blurLinksAndButtons()

let postsUrl = 'https://gorest.co.in/public-api/posts'
const postsContainer = document.querySelector('.posts')
const postsBody = document.querySelector('.posts__body')
const loaderName = 'posts__loader'

document.addEventListener(`DOMContentLoaded`, () => checkHref(postsUrl))

function checkHref(postsUrl) {

  postsUrl = new URL(postsUrl)
  const url = new URL(window.location.href)
  const searchParams = Array.from(url.searchParams)

  if (searchParams[0]) {
    const [key, value] = searchParams[0]
    postsUrl.searchParams.set(key, value)
  }
  
  addLoader(postsContainer, postsBody, loaderName)

  if (url.pathname === `/post.html`) {
    loadPosts(postsUrl, showPost)
  } else {
    loadPosts(postsUrl, showPosts)
  }
}
