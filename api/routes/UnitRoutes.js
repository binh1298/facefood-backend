'use strict';

/**
 * Unit Route
 * path: /units
 */

let express = require('express');
let Controller = require('../controllers/UnitController');
let router = express.Router();

router.get('/', Controller.view.get);

module.exports = router;