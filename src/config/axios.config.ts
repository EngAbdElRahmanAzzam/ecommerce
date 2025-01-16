import axios from "axios";

const serverDomain = import.meta.env.VITE_DOMAIN_HOST
const timeout = import.meta.env.VITE_TIMEOUT


export const axiosInstance = axios.create({
    baseURL:`${serverDomain}/api`,
    timeout
})

export const axiosInstanceImg = axios.create({
    baseURL:`${serverDomain}/uploads`,
    timeout
})

export const axiosInstanceAuth = axios.create({
    baseURL:`${serverDomain}/api`,
    timeout
})