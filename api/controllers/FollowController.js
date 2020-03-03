'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
  follow: {
    async post(req, res, next) {
      try {
        const followObject = await models.Follow.findOne(
          {where: [{follow_id: req.params.followId}, {is_following: false}]}
        );
        //User follows the selected followingID for the first time
        if (followObject == null) {
          return models.Follow
            .create(req.body)
            .then(function (follow, err) {
              res.status(status.OK)
                .send({
                  success: true,
                  message: "OK",
                  error: err
                });
            })
          //User re-follow the post
        } else {
          return models.Follow
            .update(
              {isFollowing: true, updatedAt: new Date()},
              {where: [{follow_id: req.params.followId}]})
            .then(function (result, err) {
              res.status(status.OK)
                .send({
                  success: true,
                  message: "OK",
                  error: err,
                })
            })
        }
      } catch (error) {
        next(error);
      }
    }
  },
  unfollow: {
    async post(req, res, next) {
      try {
        const followObject = await models.Follow.findOne(
          {where: [{follow_id: req.params.followId}, {is_following: true}]});
        //User is not yet following the selected followingID
        if (followObject == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "User has not followed this account yet!",
            })
          //User un-likes the post
        } else {
          return models.Follow
            .update(
              {isFollowing: false, updatedAt: new Date()},
              {where: [{follow_id: req.params.followId}, {is_following: true}]}
            ).then(function (result, err) {
              res.status(status.OK)
                .send({
                  success: true,
                  message: "OK",
                  error: err
                });
            });
        }
      } catch (error) {
        next(error);
      }
    }
  }
};