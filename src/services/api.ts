import axios from 'axios'

const local = 'http://192.168.0.64:3333'
const seg = 'http://localhost:3333/pay-pag'

export const pag = axios.create({
  baseURL: seg,
})

export const api = axios.create({
  baseURL: local,
})
