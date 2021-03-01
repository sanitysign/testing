export function blurLinksAndButtons() {
  document.addEventListener(`mouseup`, blurElement)

  function blurElement(e) {

    const elem = e.target.closest('a, button')

    if (!elem) return

    elem.blur()
  }
}