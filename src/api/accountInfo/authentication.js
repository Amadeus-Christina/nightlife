import axios from "../config.js"

export function realNameAuthentication(name, sex, birthday, idNumber, frontCard,
                                       backCard, handCard, userId,) {
  const url = "/api/identityAuthentication/realNameAuthentication"
  const data = {
    name,
    sex,
    birthday,
    idNumber,
    frontCard,
    backCard,
    handCard,
    userId,
  }
  return axios.post(url, data)
}