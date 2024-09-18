const express = require('express');
const path = require('path');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', ''));
// });

module.exports = router;
