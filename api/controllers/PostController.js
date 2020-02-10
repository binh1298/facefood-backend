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
    post(req, res) {
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
        await models.Post
          .destroy({
            where: {
              postId: req.params.postId
            }
          });
        res.status(status.OK)
          .send({
            success: true,
            message: "Post deleted!"
          });
      } catch (error) {
        next(error)
      }
    }
  },
}


