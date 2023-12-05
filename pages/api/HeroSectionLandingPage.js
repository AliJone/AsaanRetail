import { cors, runMiddleware } from '../../utils/cors';

export default async function handler(req, res) {

    await runMiddleware(req, res, cors);
    
    
    if (req.method === 'POST') {
      // Extract data from the request body
      const userData = req.body;
      console.log("userData from backedn", userData);
  
      try {
        // For demonstration, just echoing back the received data
        res.status(200).json({ message: 'Success', userData });
      } catch (error) {
        // Handle errors, such as database connection errors
        res.status(500).json({ message: 'Error occured', error });
      }
    } else {
      // If not a POST request, send a 405 - Method Not Allowed status
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }