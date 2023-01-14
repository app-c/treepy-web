import axios from 'axios'

const local = 'http://localhost:3333'

const pag = 'https://sandbox.api.pagseguro.com/'
export const pagSeg = axios.create({
  baseURL: pag,
})

export const api = axios.create({
  baseURL: local,
})
