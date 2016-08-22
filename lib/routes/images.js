const express = require('express');
const Image = require('../models/image');
const bodyParser = require('body-parser').json();
const router = express.Router();

module.exports = router

  .get('/', (req, res, next)=>{
    Image.find()
      .then(images => res.send(images))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next)=>{
    new Image(req.body).save()
      .then(image => res.send(image))
      .catch(next);
  });
