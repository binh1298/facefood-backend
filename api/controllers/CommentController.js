'use strict';
const url = require('url');
const {Op} = require("sequelize");
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
  create: {
    async post(req, res, next) {
      try {
        const userId = req.body.userId;
        const foundUser = await models.User.findOne({
          attributes: ['username'],
          where: {id: userId}
        });
        const username = foundUser.dataValues.username;
        if (username == undefined) {
          res.status(status.OK)
            .send({
              success: false,
              message: "User not found!",
              error: err
            });
        } else {
          //add username into request body
          req.body.username = username;
          return await models.Comment
            .create(
              req.body,
            )
            .then(function (comment) {
              if (comment) {
                res.status(status.OK)
                  .send({
                    success: true,
                    message: "OK",
                  });
              }
            });
        }
      } catch (error) {
        next(error)
      }
    }
  },

  view_by_post_id: {
    async get(req, res, next) {
      try {
        var comments = await models.Comment
          .findAll({
            attributes: [
              'id',
              'content',
              'userId',
              'username',
              'postId',
              'isReported',
              'isDeleted',
              'createdAt',
              'updatedAt',
            ],
            where: {
              is_deleted: false,
              post_id: req.params.postId
            }
          });
        const finalResult = await Promise.all(comments.map(async comment => {
          const foundUsername = comment.dataValues.username;
          const foundAvatarUrl = await models.User.findOne({
            attributes: ['avatarUrl'],
            where: {username: foundUsername}
          });
          const avatarUrl = foundAvatarUrl.dataValues.avatarUrl;
          return {...comment.dataValues, avatarUrl}
        }));
        res.status(status.OK)
          .send({
            success: true,
            message: finalResult,
          });
      } catch (error) {
        next(error)
      }
    },
  },

  update: {
    async put(req, res, next) {
      try {
        const newContent = req.body.content;
        if (newContent.trim().length <= 0) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Content required!"
            })
        } else {
          const result = await models.Comment.update(
            {content: newContent, updated_at: new Date()},
            {where: [{id: req.params.commentId}, {is_deleted: false}]}
          );
          res.status(status.OK)
            .send({
              success: true,
              message: result
            });
        }
      } catch (error) {
        next(error)
      }
    }
  },

  delete: {
    async put(req, res, next) {
      try {
        var result = await models.Comment.update(
          {
            isDeleted: true,
            updatedAt: new Date()
          },
          {where: [{id: req.params.commentId}, {is_deleted: false}]}
        );
        if (result == 0) {
          result = await models.Comment.update({
              isDeleted: false,
              updateAt: new Date()
            },
            {where: [{id: req.params.commentId}, {is_deleted: true}]}
          )
        }
        res.status(status.OK)
          .send({
            success: true,
            message: result
          });
      } catch (error) {
        next(error)
      }
    }
  },
  report: {
    async put(req, res, next) {
      try {
        const reportCause = req.body.reportCause;
        if (reportCause == undefined || reportCause == ""){
          return res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Report must have cause!"
            });
        }
        const reportComment = await models.Comment.update(
          {
            isReported: true,
            reportCause: reportCause,
            updatedAt: new Date()
          },
          {where: [{id: req.params.commentId}]}
        );
        if (reportComment == 1) {
          await models.Report.create(
            {
              reportCause: req.body.reportCause,
              commentId: req.params.commentId
            }
          )
        }
        return res.status(status.OK)
          .send({
            success: true,
            message: reportComment
          });
      } catch (error) {
        next(error)
      }
    }
  },

  view: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        var query = queryData.content;
        var order = queryData.order;
        if (query == undefined) {
          query = '';
        }
        if (order == undefined) {
          order = 'created_at,desc'
        }
        const orderOptions = order.split(",");
        const comments = await models.Comment
          .findAll({
            attributes: [
              'id',
              'content',
              'userId',
              'username',
              'postId',
              'isReported',
              'isDeleted',
              'reportCause',
              'createdAt',
              'updatedAt',
            ],
            where: {
              content: {
                [Op.iLike]: '%' + query + '%'
              }
            },
            order: [
              [orderOptions[0], orderOptions[1]],
            ],
          });
        const finalResult = await Promise.all(comments.map(async comment => {
          const foundUsername = comment.dataValues.username;
          const foundAvatarUrl = await models.User.findOne({
            attributes: ['avatarUrl'],
            where: {username: foundUsername}
          });
          const avatarUrl = foundAvatarUrl.dataValues.avatarUrl;
          return {...comment.dataValues, avatarUrl}
        }));
        res.status(status.OK)
          .send({
            success: true,
            message: finalResult
          });
      } catch
        (error) {
        next(error)
      }
    },
  },
};




