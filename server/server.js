const express = require('express');
const path = require('path');
const app = express();

const recipeRouter = require('./routes/recipe');

const PORT = 3000;

// handle parsing requests
app.use(express.json());

// serve static files
app.use('/', express.static(path.resolve(__dirname, 'build')));

// handle routers
app.use('/recipes', recipeRouter)

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown middleware error',
    status: 500,
    message: { err: 'There was an error' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// spin up server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
