'use strict';

/**
 * Post Route
 * path: /comment
 */

let express = require('express');
let Controller = require('../controllers/CommentController');
const {check, body} = require('express-validator');
let router = express.Router();

router.post('/', Controller.create.post);
router.put('/delete/:commentId', Controller.delete.put);
router.put('/update/:commentId', Controller.update.put);

module.exports = router;