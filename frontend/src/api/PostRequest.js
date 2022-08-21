import axios from "axios"

const API = axios.create({baseUrl: "http://localhost:1111"})

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`)
export const likePost = (id, userId) => API.put(`post/${id}/like`, {userId: userId})