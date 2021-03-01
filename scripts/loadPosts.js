export function loadPosts(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(posts => callback(posts))
}