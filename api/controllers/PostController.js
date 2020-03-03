'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const url = require('url');

module.exports = {

  create: {
    post(req, res) {
      return models.Post
        .create(req.body)
        .then(function (post, err) {
          if (post) {
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
              exclude: ['category_id', 'user_id', 'userId']
            },
            where: {
              post_name: {
                [Op.iLike]: '%' + queryData.postName + '%'
              }
            },
            order: [
              [orderOptions[0], orderOptions[1]],
            ],
          });

        const finalResult = await Promise.all(posts.map(async post => {
          const foundPostID = post.dataValues.postId;
          const foundCategoryID = post.dataValues.categoryId;
          const totalLikes = await models.Like
            .findAndCountAll({
              where: {post_id: foundPostID}
            });
          const totalComments = await models.Comment
            .findAndCountAll({
              where: {post_id: foundPostID}
            });
          const totalSteps = await models.Step
            .findAndCountAll({
              where: {post_id: foundPostID}
            });
          const category = await models.Category
            .findOne({
              attributes: ['category_name'],
              where: {category_id: foundCategoryID}
            });
          const likeCount = totalLikes.count;
          const commentCount = totalComments.count;
          const stepCount = totalSteps.count;
          const categoryName = category.dataValues.category_name;
          return {...post.dataValues, categoryName, likeCount, commentCount, stepCount}
        }));
        res.status(status.OK)
          .send({
            success: true,
            message: finalResult
          });
      } catch (error) {
        next(error)
      }
    },
  },

  view_one: {
    async get(req, res, next) {
      try {
        const post = await models.Post
          .findOne({
            attributes: {
              exclude: ['category_id', 'user_id', 'userId']
            },
            where: {
              postId: req.params.postId
            }
          });
        const foundPostID = post.dataValues.postId;
        const totalLikes = await models.Like
          .findAndCountAll({
            where: {post_id: foundPostID}
          });
        const totalComments = await models.Comment
          .findAndCountAll({
            where: {post_id: foundPostID}
          });
        const totalSteps = await models.Step
          .findAndCountAll({
            where: {post_id: foundPostID}
          });
        const imageData = await models.Image
          .findOne({
            attributes: ['image_url'],
            where: {post_id: foundPostID}
          });
        //Get data from requests
        const likeCount = totalLikes.count;
        const commentCount = totalComments.count;
        const stepCount = totalSteps.count;
        const imageUrl = imageData.dataValues.image_url;
        const finalResult = {...post.dataValues, likeCount, commentCount, stepCount, imageUrl};
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