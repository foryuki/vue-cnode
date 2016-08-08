import { UserInfo, AccessToken } from '#/constant'
import router from '#/router'

export function calcREM() {
  const html = document.documentElement
  let windowWidth = html.clientWidth
  if (windowWidth > 640) windowWidth = 640
  html.style.fontSize = windowWidth / 6.4 + 'px'
}

export function getUserInfo() {
  return getStorageData(UserInfo)
}

export function getAccessToken() {
  return getStorageData(AccessToken)
}

function getStorageData(key) {
  const data = localStorage.getItem(key)
  if (data) {
    try {
      return JSON.parse(data)
    } catch(err) {
      return data
    }
  } else {
    router.go('/account')
  }
}
