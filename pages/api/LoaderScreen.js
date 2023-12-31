export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Extract data from the request body
  
      try {
        // For demonstration, just echoing back the received data
        res.status(200).json({ message: 'Success' });
      } catch (error) {
        // Handle errors, such as database connection errors
        res.status(500).json({ message: 'Error occured'});
      }
    } else {
      // If not a POST request, send a 405 - Method Not Allowed status
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }