import axios from "axios";
// Uncomment for production
const BASE_URL = "https://dm-companion.onrender.com";

// Uncomment during dev
// const BASE_URL = "http://localhost:3000"

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});
