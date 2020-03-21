'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const url = require('url');
module.exports = {
  like_unlike: {
    async post(req, res, next) {
      try {
        //Validation

        //find username based on userId
        const userId = req.body.userId;
        if (userId == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Please enter userId",
            })
        }
        const foundUser = await models.User.findOne({
          attributes: ['username'],
          where: {id: userId}
        });
        const username = foundUser.dataValues.username;
        if (username == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "No user found!",
            })
        }
        ;

        //find post based on postId
        const postId = req.body.postId;
        if (postId == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Please enter postId!",
            })
        }
        const foundPost = await models.Post.findOne({
          where: {id: postId}
        })
        if (foundPost == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Post not found!",
            })
        }
        //Find Like based on userId and postId
        const likeObject = await models.Like.findOne(
          {
            where:
              [
                {user_id: userId},
                {post_id: postId},
              ]
          }
        );
        //Start action
        const action = req.params.action;
        if (action == "like") {
          //User likes the post for the first time
          if (likeObject == null) {
            return models.Like
              .create(
                {
                  userId: userId,
                  username: username,
                  postId: postId,
                  isLiked: true
                }
              )
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
          } else if (likeObject.dataValues.isLiked == false) {
            return models.Like
              .update(
                {
                  isLiked: true,
                  updatedAt: new Date()
                },
                {
                  where: [
                    {user_id: userId},
                    {post_id: postId}
                  ]
                })
              .then(function (result, err) {
                res.status(status.OK)
                  .send({
                    success: true,
                    message: "OK",
                    error: err
                  });
              });
          }
        } else if (action == "unlike") {
          if (likeObject.dataValues.isLiked == false) {
            res.status(status.OK)
              .send({
                success: false,
                message: "User has not liked this post!",
              });
          } else {
            return models.Like
              .update(
                {
                  isLiked: false,
                  updatedAt: new Date()
                },
                {
                  where: [
                    {user_id: userId},
                    {post_id: postId}
                  ]
                })
              .then(function (result, err) {
                res.status(status.OK)
                  .send({
                    success: true,
                    message: "OK",
                    error: err
                  });
              });
          }
        } else {
          res.status(status.OK)
            .send({
              success: true,
              message: "Action not supported!",
            });
        }
      } catch
        (error) {
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