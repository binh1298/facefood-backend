'use strict';

/**
 * Admin Route
 * path: /admin
 */

let express = require('express');
let Controller = require('../controllers/AdminController');
let router = express.Router();

router.get('/view-users', Controller.viewUsers.get);
router.get('/view-posts', Controller.viewPosts.get);

module.exports = router;