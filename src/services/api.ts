import axios from 'axios'

const local = 'http://localhost:3333'
const server = 'https://treepy-server.appcom.dev'
const seg = `${server}/pay-pag`

export const pag = axios.create({
  baseURL: seg,
})

export const api = axios.create({
  baseURL: server,
})
