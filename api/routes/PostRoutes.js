'use strict';

/**
 * Post Route
 * path: /post
 */

let express = require('express');
let Controller = require('../controllers/PostController');
let router = express.Router();

router.get('/', Controller.index.get);
router.post('/', Controller.create.post);
router.put('/delete/:postId', Controller.delete.put);
router.get('/view/:postId', Controller.view.get);

module.exports = router;