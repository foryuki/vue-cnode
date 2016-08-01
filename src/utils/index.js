export function calcREM() {
  const html = document.documentElement
  let windowWidth = html.clientWidth
  if (windowWidth > 640) windowWidth = 640
  html.style.fontSize = windowWidth / 6.4 + 'px'
}
