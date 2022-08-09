import axios from "axios";

const API = axios.create({baseUrl: "http://localhost:1111"})

export const login = (formData) => API.post('/auth/login', formData)
export const signup = (formData) => API.post('/auth/register', formData)