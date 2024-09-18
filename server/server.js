const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());

// serve static files
app.use('/', express.static(path.resolve(__dirname, '../client')));

// spin up server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
