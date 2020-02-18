'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
  index: {
    async get(req, res, next) {
      try {
        const posts = await models.Post.findAll({});
        res.status(status.OK)
          .send({
            success: true,
            message: posts
          });
      } catch (error) {
        next(error)
      }
    },
  },

  create: {
    async post(req, res, next) {
      try {
      } catch (error) {
        next(error)
      }
      return models.Post
        .create(req.body)
        .then(function (err, post) {
          if (err) throw err;
          else {
            res.status(status.OK)
              .send({
                success: true,
                message: post,
                error: null,
                token: null
              });
          }
        });
    },
  },

  view: {
    async get(req, res, next) {
      try {
        const post = models.Post
          .findOne({
            where: {
              postId: req.params.postId
            }
          });
        res.status(status.OK)
          .send({
            success: true,
            message: post,
          });
      } catch (error) {
        next(error)
      }
    },
  },

  delete: {
    async put(req, res, next) {
      try {
        const result = await models.Post.update(
          {isDeleted: true},
          {where: {postId: req.params.postId}}
        );
        res.status(status.OK)
          .send({
            success: true,
            message: result,
          });
      } catch (error) {
        next(error)
      }
    }
  },
}


