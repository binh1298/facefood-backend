'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const Sequelize = require("sequelize");
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
        var postName = queryData.postName;
        var order = queryData.order;
        var categoryName = queryData.categoryName;
        var categoryID;
        var whereCondition;
        if (postName == undefined) {
          postName = '';
        }
        if (order == undefined) {
          order = 'created_at,asc'
        }
        const orderOptions = order.split(",");

        if (categoryName != undefined) {
          const requestCategory = await models.Category.findOne({
            attributes: ['id'],
            where: {category_name: categoryName}
          });
          categoryID = requestCategory.dataValues.id;
        }
        if (categoryID != undefined) {
          whereCondition = {
            post_name: {
              [Op.iLike]: '%' + postName + '%'
            },
            category_id: categoryID,
          }
        } else {
          whereCondition = {
            post_name: {
              [Op.iLike]: '%' + postName + '%'
            },
          }
        }
        const posts = await models.Post
          .findAll({
            attributes: {
              exclude: ['category_id', 'user_id', 'userId']
            },
            where: whereCondition,
            order: [
              [orderOptions[0], orderOptions[1]],
            ],
          });

        const finalResult = await Promise.all(posts.map(async post => {
          const foundPostID = post.dataValues.id;
          const foundCategoryID = post.dataValues.category_id;
          const totalLikes = await models.Like
            .findAndCountAll({
              where: {post_id: foundPostID, is_liked: true}
            });
          const totalComments = await models.Comment
            .findAndCountAll({
              where: {post_id: foundPostID, is_deleted: false}
            });
          const totalSteps = await models.Step
            .findAndCountAll({
              where: {post_id: foundPostID}
            });
          var category;
          var categoryName;
          if (foundCategoryID != undefined) {
            category = await models.Category
              .findOne({
                attributes: ['category_name'],
                where: {id: foundCategoryID}
              });
            categoryName = category.dataValues.category_name;
          }
          const likeCount = totalLikes.count;
          const commentCount = totalComments.count;
          const stepCount = totalSteps.count;
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

  explore: {
    async get(req, res, next) {
      try {
        const posts = await models.Post
          .findAll({
            attributes: {
              exclude: ['category_id', 'user_id', 'userId']
            },
            order: [Sequelize.fn('RANDOM')],
            limit: 5
          });

        const finalResult = await Promise.all(posts.map(async post => {
          const foundPostID = post.dataValues.id;
          const foundCategoryID = post.dataValues.categoryId;
          const totalLikes = await models.Like
            .findAndCountAll({
              where: {post_id: foundPostID, is_liked: true}
            });
          const totalComments = await models.Comment
            .findAndCountAll({
              where: {post_id: foundPostID, is_deleted: false}
            });
          const category = await models.Category
            .findOne({
              attributes: ['category_name'],
              where: {id: foundCategoryID}
            });
          const likeCount = totalLikes.count;
          const commentCount = totalComments.count;
          const categoryName = category.dataValues.category_name;
          return {...post.dataValues, categoryName, likeCount, commentCount}
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

  popular: {
    async get(req, res, next) {
      try {
        const posts = await models.Post
          .findAll({
            attributes: {
              exclude: ['category_id', 'user_id', 'userId']
            },
          });

        var finalResult = await Promise.all(posts.map(async post => {
          const foundPostID = post.dataValues.id;
          const foundCategoryID = post.dataValues.categoryId;
          const totalLikes = await models.Like
            .findAndCountAll({
              where: {post_id: foundPostID, is_liked: true}
            });
          const totalComments = await models.Comment
            .findAndCountAll({
              where: {post_id: foundPostID, is_deleted: false}
            });
          const category = await models.Category
            .findOne({
              attributes: ['category_name'],
              where: {id: foundCategoryID}
            });
          const likeCount = totalLikes.count;
          const commentCount = totalComments.count;
          const categoryName = category.dataValues.category_name;
          return {...post.dataValues, categoryName, likeCount, commentCount}
        }));
        finalResult.sort((a, b) => (a.totalLikes > b.totalLikes) ? 1 : ((b.totalLikes > a.totalLikes) ? -1 : 0));
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

  view_post_details: {
    async get(req, res, next) {
      try {
        const post = await models.Post
          .findOne({
            attributes: {
              exclude: ['category_id', 'user_id', 'userId']
            },
            where: {
              id: req.params.postId
            }
          });
        //data from initial response
        const foundCategoryID = post.dataValues.categoryId;
        const foundPostID = post.dataValues.id;
        //Additional data for Post
        const totalLikes = await models.Like
          .findAndCountAll({
            where: {post_id: foundPostID, is_liked: true}
          });
        const totalComments = await models.Comment
          .findAndCountAll({
            where: {post_id: foundPostID, is_deleted: false}
          });
        const stepsData = await models.Step
          .findAndCountAll({
            attributes: ['id', 'description', 'stepCount','imageUrl'],
            where: {post_id: foundPostID}
          });
        const category = await models.Category
          .findOne({
            attributes: ['category_name'],
            where: {id: foundCategoryID}
          });
        //Get data from requests
        const likeCount = totalLikes.count;
        const commentCount = totalComments.count;
        const stepCount = stepsData.count;
        const categoryName = category.dataValues.category_name;
        const steps = stepsData.rows;
        const finalResult = {...post.dataValues, categoryName, likeCount, commentCount, stepCount, steps};
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
              id: req.params.postId
            }
          },
        );
        const newStatus = !post.dataValues.is_deleted;
        const result = await models.Post.update(
          {isDeleted: newStatus},
          {
            where: {
              id: req.params.postId
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