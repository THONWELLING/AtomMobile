import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api.b7web.com.br'
})

export const apiMobileLogin = axios.create({
  baseURL: 'https://api.ambarxcall.com.br/AtonSNIsapi.dll',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '1794FB9A308808A971A33CA9Fc79363506d50f2dadac9a0778'
  }
})

export const apiMobile = axios.create({
  baseURL: 'https://api.ambarxcall.com.br/AtonSNIsapi.dll',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '1794FB9A308808A971A33CA9Fc79363506d50f2dadac9a0778'
  }
})