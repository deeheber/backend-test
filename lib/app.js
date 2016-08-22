const express = require('express');
const app = module.exports = express();
const images = require('./routes/images');

// routes
app.use('/api/images', images);

// eslint-disable-next-line
app.use((error, req, res, next)=>{
  res.status(400).json(error);
});

module.exports = app;
