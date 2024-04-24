const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
const PORT =  3005;

app.post('/proxy', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    res.send({data:response.data});
  } catch (error) {
    res.status(500).send('Error fetching URL');
  }
});

// app.listen(PORT, () => {
//   console.log(`Proxy server is running on port ${PORT}`);
// });

app.listen(PORT)