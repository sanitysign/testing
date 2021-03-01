import {removeLoader} from './loader.js'
import {loadPosts} from './loadPosts.js'

const postsContainer = document.querySelector('.posts')
const postsBody = document.querySelector('.posts__body')
const loaderName = 'posts__loader'
let commentsUrl = 'https://gorest.co.in/public-api/comments'

export function showPost(posts) {
  console.log(posts)
  const url = new URL(commentsUrl)
  url.searchParams.set('post_id', posts.data[0].id)

  loadPosts(url, (comments) => {
    removeLoader(postsContainer, postsBody, loaderName)
    appendPost(posts.data[0], comments.data)
    console.log(comments.data)
  })
}

function appendPost(post, comments) {
  const postElement = document.querySelector('.posts-post')
  postElement.innerHTML = `
  <h1 class="posts-post__heading">${post.title}</h1>
  <time  datetime="${post.created_at}" class="posts-post__date">${new Date(post.created_at).toLocaleDateString()}</time>
  <p class="posts-post__text">${post.body}</p>
  <div class="posts-post__comments">
    <h2 class="posts-post__comments-heading">Comments</h2>
    <ul class="posts-post__comments">${ appendComments(comments).join('') }</ul>
  </div>
  `
  postsBody.append(postElement)
}

function appendComments(comments) {
  return comments.map(comment => {
    return `
    <li class="posts-post__comment">
      <h3 class="posts-post__comment-author">${comment.name}</h3>
      <p class="posts-post__comment-text">${comment.body}</p>
    </li>
    `
  })
}