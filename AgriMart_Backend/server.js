const express = require('express');
const app = express();
const db = require("./app");
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});