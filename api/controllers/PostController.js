'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const url = require('url');
const sequelize = require('sequelize');

module.exports = {
  view: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        if (queryData.postName == undefined) {
          queryData.postName = '';
        }
        if (queryData.order == undefined) {
          queryData.order = 'created_at,asc'
        }
        const orderOptions = queryData.order.split(",");
        const posts = await models.Post
          .findAll({
            attributes: {
              include: [
                [sequelize.fn('COUNT', sequelize.col('Likes.like_id')), 'totalLikes'],
                [sequelize.fn('COUNT', sequelize.col('Comments.comment_id')), 'totalComments'],
                [sequelize.fn('COUNT', sequelize.col('Steps.step_id')), 'totalSteps'],
              ],
              exclude: ['category_id', 'user_id', 'userId']
            },
            include: [
              {
                model: models.Like,
                attributes: [],
              },
              {
                model: models.Comment,
                attributes: [],
              },
              {
                model: models.Step,
                attributes: [],
              }
            ],
            where: {
              post_name: {
                [Op.iLike]: '%' + queryData.postName + '%'
              }
            }, group: ['Post.post_id', 'Likes.like_id', 'Comments.comment_id', 'Steps.step_id'],
            order: [
              [orderOptions[0], orderOptions[1]],
            ],
            raw: false,
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

  view_one: {
    async get(req, res, next) {
      try {
        const post = await models.Post
          .findOne({
            attributes: [
              'postId',
              'postName',
              'description',
              'timeNeeded',
              'userId',
              'categoryId',
              'isDeleted',
              'createdAt',
              'updatedAt',
            ],
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

  set_avail_status: {
    async put(req, res, next) {
      try {
        const post = await models.Post.findOne({
            attributes: [
              'is_deleted',
            ],
            where: {
              postId: req.params.postId
            }
          },
        );
        console.log(post.dataValues.is_deleted);
        const newStatus = !post.dataValues.is_deleted;
        const result = await models.Post.update(
          {isDeleted: newStatus},
          {
            where: {
              postId: req.params.postId
            }
          }
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


