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
router.get('/users/view-all', UserController.index.get);
router.post('/users/add',UserController.new.post);
//post
router.get('/posts/view-all',PostController.index.get)
router.post('/posts/create',PostController.create.post)
router.post('/posts/delete',PostController.delete.post)
router.get('/posts/view-one',PostController.view.get)
module.exports = router;