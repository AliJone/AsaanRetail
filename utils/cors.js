// utils/cors.js

import Cors from 'cors';

// Initialize the cors middleware
export const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  origin: '*', // Adjust this to limit the origins that can access your API
});

export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  }
 
  