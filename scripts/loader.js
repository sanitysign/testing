export function addLoader(container, body, loaderName) {

  const loader = document.createElement('div')
  loader.classList.add(loaderName)
  loader.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
  
  body.classList.add('hidden')
  container.append(loader)
}

export function removeLoader(container, body, loaderName) {

  body.classList.remove('hidden')
  container.querySelector(`.${loaderName}`).remove()
}