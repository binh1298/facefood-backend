'use strict';

/**
 * Admin Route
 * path: /admin
 */

let express = require('express');
let UserController = require('../controllers/UserController');
let router = express.Router();

router.get('/users/view', UserController.index.get);
router.post('/users/add',UserController.new.post);

module.exports = router;