import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:1111"})

export const getUser = (userId) => API.get(`/user/${userID}`)