'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const url = require('url');

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
                error: err,
                token: null
              });
          }
        });
    },
  },

  view_all: {
    async get(req, res, next) {
      try {
        const comments = await models.Comment
          .findAll({
            attributes: [
              'commentId',
              'content',
              'userId',
              'postId',
              'isDeleted',
              'createdAt',
              'updatedAt',
            ],
          });
        res.status(status.OK)
          .send({
            success: true,
            message: comments,
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
        if (newContent.length <= 0) {
          res.status(status.BAD_REQUEST)
            .send({
              success: false,
              message: "Content required!"
            })
        } else {
          const result = await models.Comment.update(
            {content: newContent, updated_at: new Date()},
            {where: [{comment_id: req.params.commentId}, {is_deleted: false}]}
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
          {where: [{comment_id: req.params.commentId}, {is_deleted: false}]}
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


