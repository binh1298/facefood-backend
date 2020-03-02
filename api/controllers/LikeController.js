'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
  like: {
    async post(req, res, next) {
      try {
        const likeObject = await models.Like.findOne(
          {where: [{like_id: req.params.likeId}, {is_liked: false}]}
        );
        //User likes the post for the first time
        if (likeObject == null) {
          return models.Like
            .create(req.body)
            .then(function (like, err) {
              if (like) {
                res.status(status.OK)
                  .send({
                    success: true,
                    message: "OK",
                    error: err,
                  })
              }
            })
          //User re-likes the post
        } else {
          return models.Like
            .update(
              {isLiked: true, updatedAt: new Date()},
              {where: [{like_id: req.params.likeId}]})
            .then(function (result, err) {
              res.status(status.OK)
                .send({
                  success: true,
                  message: "OK",
                  error: err
                })
            })
        }
      } catch (error) {
        next(error);
      }
    }
  },
  unlike: {
    async post(req, res, next) {
      try {
        const likeObject = await models.Like.findOne({where: [{like_id: req.params.likeId}, {is_liked: true}]});
        //User has not liked this post yet
        if (likeObject == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "User has not liked this post yet!",
            })
          //User un-likes the post
        } else {
          return models.Like
            .update(
              {isLiked: false, updatedAt: new Date()},
              {where: [{like_id: req.params.likeId}, {is_liked: true}]}
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