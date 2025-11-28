import axios from "axios"

const BASE_URL = "http://192.168.1.4:8000/api/"

export const axiosClient = axios.create({
    baseURL: BASE_URL
})

export const SIGN_IN = 'users'