// services/api.js

import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers here
  },
  // You can add more default settings if needed
});

export default api;