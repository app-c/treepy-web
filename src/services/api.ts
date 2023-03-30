import axios from 'axios'

const local = 'http://localhost:3333'
const production = 'https://treepy.app-com.digital'
const seg = `${production}/pay-pag`

export const pag = axios.create({
  baseURL: seg,
})

export const api = axios.create({
  baseURL: production,
})
