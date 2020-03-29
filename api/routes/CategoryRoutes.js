'use strict';

/**
 * Category Route
 * path: /categories
 */

let express = require('express');
let Controller = require('../controllers/CategoryController');
let router = express.Router();

router.get('/', Controller.view.get);

module.exports = router;