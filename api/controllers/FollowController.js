'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const url = require('url');
module.exports = {
  follow: {
    async post(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        const username = queryData.username;
        if (username == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUsername = queryData.following;
        if (followingUsername == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following username not found!",
            });
        }
        const user = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: username,
            }
          }
        });
        if (user == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUser = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: followingUsername,
            }
          }
        });
        if (followingUsername == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following user not found!",
            });
        }
        const userID = user.dataValues.id;
        const followingID = followingUser.dataValues.id;
        const followObject = await models.Follow.findOne(
          {where: [{user_id: userID}, {following_id: followingID}]}
        );
        //User follows the selected followingID for the first time
        if (followObject == null) {
          return models.Follow
            .create({followingId: followingID, userId: userID, isFollowing: true})
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
              {where: [{user_id: userID}, {following_id: followingID}]})
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
        const queryData = url.parse(req.url, true).query;
        const username = queryData.username;
        if (username == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUsername = queryData.following;
        if (followingUsername == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following username not found!",
            });
        }
        const user = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: username,
            }
          }
        });
        if (user == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUser = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: followingUsername,
            }
          }
        });
        if (followingUsername == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following user not found!",
            });
        }
        const userID = user.dataValues.id;
        const followingID = followingUser.dataValues.id;
        const followObject = await models.Follow.findOne(
          {where: [{user_id: userID}, {following_id: followingID}, {is_following: true}]}
        );
        if (followObject == null) {
          res.status(status.OK)
            .send({
              success: false,
              message: "Current user has not followed the displaying user!",
            });
          //User unfollows the post
        } else {
          return models.Follow
            .update(
              {isFollowing: false, updatedAt: new Date()},
              {where: [{user_id: userID}, {following_id: followingID}]})
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
  follow_status: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        const username = queryData.username;
        if (username == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUsername = queryData.following;
        if (followingUsername == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following username not found!",
            });
        }
        const user = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: username,
            }
          }
        });
        if (user == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Username not found!",
            });
        }
        const followingUser = await models.User.findOne({
          attributes: ['id'],
          where: {
            username: {
              [Op.eq]: followingUsername,
            }
          }
        });
        if (followingUsername == null) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Following user not found!",
            });
        }
        const userID = user.dataValues.id;
        const followingID = followingUser.dataValues.id;
        const followObject = await models.Follow.findOne(
          {where: [{user_id: userID}, {following_id: followingID}, {is_following: true}]}
        );
        if (followObject == null) {
          res.status(status.OK)
            .send({
              success: true,
              message: false,
            });
          //User re-follow the post
        } else {
          res.status(status.OK)
            .send({
              success: true,
              message: true,
            })
        }
      } catch (error) {
        next(error);
      }
    }
  },
};