import axios from 'axios';

const api = axios.create({
    baseURL: 'https://desafioclarke-back.onrender.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE", // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Headers": "X-Requested-With,content-type", // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    }
})

export default api;