'use strict';

/**
 * Like Route
 * path: /likes
 */

let express = require('express');
let Controller = require('../controllers/LikeController');
let router = express.Router();

router.post('/:likeId/like', Controller.like.post);
router.post('/:likeId/unlike', Controller.unlike.post);
router.get('/status', Controller.check_if_liked.get);
module.exports = router;