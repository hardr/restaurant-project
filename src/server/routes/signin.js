const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  res.render('signin');
});

// router.post('/', function (req, res, next) {
//
// })

module.exports = router;