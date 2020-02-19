'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");

module.exports = {
  index: {
    async get(req, res, next) {
      try {
        const posts = await models.Post.findAll({
          attributes: [
            'post_id',
            'post_name',
            'description',
            'time_needed',
            'is_deleted',
            'created_at',
            'updated_at',
            'user_id',
            'category_id'
          ]
        });
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
        const result = await models.Post.update(
          {isDeleted: true},
          {where: {post_id: req.params.postId}}
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
  search: {
    async get(req, res, next) {
      try {
        const posts = await models.Post.findAll({
          attributes: [
            'post_id',
            'post_name',
            'description',
            'time_needed',
            'is_deleted',
            'created_at',
            'updated_at',
            'user_id',
            'category_id'
          ],
          where: {
            post_name: {
              [Op.iLike]: '%' + req.params.postName + '%'
            }
          }
        });
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
}


