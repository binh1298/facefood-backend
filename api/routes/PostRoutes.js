'use strict';

/**
 * Post Route
 * path: /post
 */

let express = require('express');
let Controller = require('../controllers/PostController');
let router = express.Router();

router.get('/', Controller.index.get);
router.post('/create', Controller.create.post);
router.post('/delete', Controller.delete.post);
router.get('/view', Controller.view.get);

module.exports = router;