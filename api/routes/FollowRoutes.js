'use strict';

/**
 * Follow Route
 * path: /follows
 */

let express = require('express');
let Controller = require('../controllers/FollowController');
let router = express.Router();

router.post('/:followId/follow', Controller.follow.post);
router.post('/:followId/unfollow', Controller.unfollow.post);

module.exports = router;