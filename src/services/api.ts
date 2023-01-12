import axios from 'axios'

const pag = 'https://sandbox.api.pagseguro.com/'
export const pagSeg = axios.create({
  baseURL: pag,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Control-Allow-Origin': '*',
    Token: 'sfg999666t673t7t82',
    mode: 'no-cors',
  },
})
