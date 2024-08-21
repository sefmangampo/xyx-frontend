// src/api/axios.ts
import axios from 'axios';

const railsEndpoint = 'http://localhost:3000';

const api = axios.create({
    baseURL: railsEndpoint,
    timeout: 10000, // optional: set a timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
