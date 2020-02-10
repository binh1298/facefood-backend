'use strict';

/**
 * User Route
 * path: /user
 */

let express = require('express');
let Controller = require('../controllers/UserController');
let router = express.Router();

router.get('/', Controller.index.get);
router.post('/', Controller.new.post);

module.exports = router;