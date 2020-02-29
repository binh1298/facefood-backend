'use strict';

/**
 * Post Route
 * path: /comment
 */

let express = require('express');
let Controller = require('../controllers/CommentController');
let router = express.Router();

router.post('/', Controller.create.post);
router.get('/', Controller.view_all.get);
router.put('/delete/:commentId', Controller.delete.put);
router.put('/update/:commentId', Controller.update.put);

module.exports = router;