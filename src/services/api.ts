import axios from 'axios'

export const pagSeg = axios.create({
  baseURL: 'https://sandbox.api.pagseguro.com',
})
