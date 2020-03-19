'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
  create: {
    post(req, res) {
      return models.Comment
        .create(req.body)
        .then(function (comment, err) {
          if (comment) {
            res.status(status.OK)
              .send({
                success: true,
                message: "OK",
                error: err
              });
          }
        });
    },
  },

  view_by_post_id: {
    async get(req, res, next) {
      try {
        var comments;
        if (req.params.postId == undefined) {
          comments = await models.Comment
            .findAll({
              attributes: [
                'id',
                'content',
                'userId',
                'postId',
                'isDeleted',
                'createdAt',
                'updatedAt',
              ],
              where: {
                is_deleted: false,
              }
            });
        } else {
          comments = await models.Comment
            .findAll({
              attributes: [
                'id',
                'content',
                'userId',
                'postId',
                'isDeleted',
                'createdAt',
                'updatedAt',
              ],
              where: {
                is_deleted: false,
                post_id: req.params.postId
              }
            });
        }
        const finalResult = await Promise.all(comments.map(async comment => {
          const foundUserID = comment.dataValues.userId;
          const foundUserDetails = await models.User.findOne({
            attributes: ['username', 'avatarUrl'],
            where: {id: foundUserID}
          });
          const username = foundUserDetails.dataValues.username;
          const avatarUrl = foundUserDetails.dataValues.avatarUrl;
          return {...comment.dataValues, username, avatarUrl}
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
        const result = await models.Comment.update(
          {isDeleted: true, updated_at: new Date()},
          {where: [{id: req.params.commentId}, {is_deleted: false}]}
        );
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
};


