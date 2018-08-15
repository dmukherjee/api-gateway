const express = require('express');
const request = require('request-promise-native');

const app = express();
const PORT = 9001;

// Resolve: GET /api/listing/:location
app.get('/api/listing/:location', async (req, res) => {
  const { location } = req.params;
  const uri = `http://localhost:3001/api/listing/${location}`;
  const searchResult = await request(uri);
  res.status(200).send(JSON.parse(searchResult));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));