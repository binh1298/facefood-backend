'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const url = require('url');
module.exports = {
  like: {
    async post(req, res, next) {
      try {
        const likeObject = await models.Like.findOne(
          {where: [{id: req.params.likeId}, {is_liked: false}]}
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
              {where: [{id: req.params.likeId}]})
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
        const likeObject = await models.Like.findOne({where: [{id: req.params.likeId}, {is_liked: true}]});
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
              {where: [{id: req.params.likeId}, {is_liked: true}]}
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
  },
  check_if_liked: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        var postId = parseInt(queryData.postId, 10);
        var username = queryData.username;
        console.log(postId);
        console.log(username);
        if (postId == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Must include post ID!"
            });
        }
        if (username == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Must include username!"
            });
        }
        const isLiked = await models.Like
          .findOne({
            attributes: ['isLiked'],
            where: {postId: postId, username: username},
          });
        if (isLiked == null) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Like not exist!"
            });
        }
        res.status(status.OK)
          .send({
            success: true,
            message: isLiked
          });
      } catch (error) {
        next(error)
      }
    },
  }
};