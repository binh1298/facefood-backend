'use strict';

/**
 * Follow Route
 * path: /follows
 */

let express = require('express');
let Controller = require('../controllers/FollowController');
let router = express.Router();

router.get('/status',Controller.follow_status.get)
router.post('/follow', Controller.follow.post);
router.post('/unfollow', Controller.unfollow.post);

module.exports = router;