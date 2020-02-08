'use strict';

/**
 * Admin Route
 * path: /admin
 */

let express = require('express');
let UserController = require('../controllers/UserController');
let PostController = require('../controllers/PostController');
let router = express.Router();
//user
router.get('/users/view', UserController.index.get);
router.post('/users/add',UserController.new.post);
//post
router.post('/posts/create',PostController.create.post)
module.exports = router;