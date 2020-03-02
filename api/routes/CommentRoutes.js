'use strict';

/**
 * Comment Route
 * path: /comment
 */

let express = require('express');
let Controller = require('../controllers/CommentController');
let router = express.Router();


router.post('/', Controller.create.post);
router.get('/', Controller.view_all.get);
router.put('/:commentId/delete', Controller.delete.put);
router.put('/:commentId/update', Controller.update.put);

module.exports = router;