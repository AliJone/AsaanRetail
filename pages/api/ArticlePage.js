export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Extract data from the request body
      const getID = req.body;

      const userData = {
        data : "<p><strong>tag: Daraz, title: Explore new opportunities with Daraz seller center SriLanka, author: ALi Haider, Date: 12/11/2023</strong></p><p><br></p><p>Daraz SriLanka is unarguably one of the largest and leading e-commerce platforms in the country. And you are just one click away from exploring new opportunities on the website. This calls for you to sign up on Daraz seller center Sri Lanka, and earn bucks.</p><p><br></p><p>Back in 2015, Daraz stepped into the e-commerce industry of the country with only fifty employees and 200 sellers. Seven years down the road, it has turned into an e-commerce giant by revolutionizing the industry, bringing huge discounts and offers for its loyal customers.</p><p><br></p><p><br></p><h1>What are the new opportunities offered by Daraz seller center, Sri Lanka?</h1><p><br></p><p>In the past few years, the e-commerce industry has taken a huge turn all around the world. However, the leadership took a pioneering role to influence its sources and obtain advanced tech to spread the change and perks in all parts of the country.</p>"
      }

  
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