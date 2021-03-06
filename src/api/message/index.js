import axios from "../config.js"

export function queryCommentsMyComments(userId) {
  const url = "/api/post/queryCommentsMyComments"
  const data = {
    userId
  }
  return axios.post(url, data)
}

export function queryAllMessage(userId) {
  const url = "/api/post/queryAllMessage"
  const data = {
    userId
  }
  return axios.post(url, data)
}

export function queryMyLikes(userId) {
  const url = "/api/post/queryMyLikes"
  const data = {
    userId
  }
  return axios.post(url, data)
}

export function queryMyWishpers(userId) {
  const url = "/api/post/queryMyWishpers"
  const data = {
    userId
  }
  return axios.post(url, data)
}

export function queryMySystemInfo(userId) {
  const url = "/api/post/queryMySystemInfo"
  const data = {
    userId
  }
  return axios.post(url, data)
}

export function queryAtUserOrPost(atUserId) {
  const url = "/api/post/queryAtUserOrPost"
  const data = {
    atUserId
  }
  return axios.post(url, data)
}