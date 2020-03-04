'use strict';

/**
 * Comment Route
 * path: /comment
 */

let express = require('express');
let Controller = require('../controllers/CommentController');
let router = express.Router();

router.get('/', Controller.view_by_post_id.get);
router.get('/:postId', Controller.view_by_post_id.get);
router.post('/', Controller.create.post);
router.put('/:commentId/delete', Controller.delete.put);
router.put('/:commentId/update', Controller.update.put);

module.exports = router;