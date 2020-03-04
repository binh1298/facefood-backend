'use strict';

/**
 * Post Route
 * path: /post
 */

let express = require('express');
let Controller = require('../controllers/PostController');
let router = express.Router();

router.get('/', Controller.view.get);
router.get('/:postId', Controller.view_post_details.get);
router.post('/', Controller.create.post);
router.put('/:postId', Controller.set_avail_status.put);

module.exports = router;