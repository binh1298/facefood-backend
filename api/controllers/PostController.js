'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const Sequelize = require("sequelize");
const url = require('url');
module.exports = {
  create: {
    async post(req, res) {
      try {
        const bodyPost = req.body.post;
        var bodySteps = req.body.steps;
        const categoryName = bodyPost.categoryName;
        //Create Category
        var foundCategory = await models.Category.findOne({
            attributes: ['id'],
            where: {
              category_name: {
                [Op.eq]: categoryName,
              },
            }
          }
        );
        if (foundCategory == null) {
          await models.Category.create({
            categoryName: categoryName
          });
          foundCategory = await models.Category.findOne({
            attributes: ['id'],
            where: {
              category_name: {
                [Op.eq]: categoryName
              },
            }
          });
        }
        const categoryID = foundCategory.dataValues.id;
        bodyPost.categoryId = categoryID;
        //Get Username
        const userId = req.body.post.userId;
        const user = await models.User.findOne({
          attributes: ['username'],
          where: {id: userId},
        });
        bodyPost.username = user.dataValues.username;
        //Create Post
        const createdPost = await models.Post.create(bodyPost);
        //Create Steps
        bodySteps = await Promise.all(bodySteps.map(async step => {
          const postId = createdPost.dataValues.id;
          return {...step, postId};
        }));
        await models.Step.bulkCreate(bodySteps);
        //Create Ingredients
        var bodyIngredients = req.body.ingredients;
        bodyIngredients = await Promise.all(bodyIngredients.map(async ingredient => {
          const postId = createdPost.dataValues.id;
          return {...ingredient, postId};
        }));
        await models.Ingredient.bulkCreate(bodyIngredients);
        res.status(status.CREATED)
          .send({
            success: true,
            message: "Create Post Successfully",
          });
      } catch (error) {
        res.status(status.BAD_REQUEST)
          .send({
            success: false,
            message: error,
          });
      }
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
            where: {
              category_name: {
                [Op.iLike]: '%' + categoryName + '%'
              },
            }
          });
          categoryID = requestCategory?.dataValues.id;
        }
        if (categoryID != null) {
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
          const foundCategoryID = post.dataValues.categoryId;
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
            attributes: ['id', 'description', 'stepCount', 'imageUrl'],
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
  search: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        const type = queryData.type;
        const query = queryData.query;
        var foundPosts;
        if (query == '') {
          res.status(status.OK)
            .send({
              success: false,
              message: "Input search query!"
            });
        } else {
          switch (type) {
            //Find by postName
            case "name": {
              foundPosts = await models.Post.findAll({
                where: {
                  post_name: {
                    [Op.iLike]: '%' + query + '%'
                  },
                }
              });
              break;
            }
            //Find by categoryName
            case "category": {
              const category = await models.Category.findAll({
                attributes: ['id'],
                where: {
                  category_name: {
                    [Op.iLike]: '%' + query + '%'
                  }
                },
                raw: true,
              });
              const categoryIds = category.map(category => category.id);
              foundPosts = await models.Post.findAll({
                where: {category_id: categoryIds}
              });
              break;
            }
            //Find by ingredientName
            case "ingredient": {
              const ingredients = await models.Ingredient.findAll({
                attributes: ['post_id'],
                where: {
                  ingredient_name: {
                    [Op.iLike]: '%' + query + '%'
                  }
                },
                raw: true,
              });
              const postIds = ingredients.map(ingredient => ingredient.post_id);
              foundPosts = await models.Post.findAll({
                where: {id: postIds}
              });
              break;
            }
            default: {
              res.status(status.OK)
                .send({
                  success: false,
                  message: "Invalid search type!"
                });
            }
          }
          const finalResult = await Promise.all(foundPosts.map(async post => {
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
            return {...post.dataValues, categoryName, likeCount, commentCount}
          }));
          return res.status(status.OK)
            .send({
              success: true,
              message: finalResult
            });
        }
      } catch
        (error) {
        next(error)
      }
    }
  },

  feed: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        var username = queryData.username;
        if (username == undefined) {
          res.status(status.BAD_REQUEST)
            .send({
              success: true,
              message: "Please enter username!"
            });
        } else {
          const user = await models.User.findOne({
            attributes: ['id'],
            where: {
              username: {
                [Op.eq]: username
              }
            }
          });
          if (user == null) {
            res.status(status.BAD_REQUEST)
              .send({
                success: true,
                message: "User not found!"
              });
          } else {
            const userID = user.dataValues.id;
            const followings = await models.Follow.findAll({
              attributes: ['followingId'],
              where: {
                user_id: {
                  [Op.eq]: userID
                }
              }
            })
            if (followings.length == 0) {
              res.status(status.BAD_REQUEST)
                .send({
                  success: false,
                  message: "User has not followed anyone!"
                });
            } else {
              const followingsIDs = await Promise.all(followings.map(async following => {
                return following.dataValues.followingId;
              }));
              console.log(followingsIDs);
              const posts = await models.Post
                .findAll({
                  attributes: {
                    exclude: ['category_id', 'user_id', 'userId']
                  },
                  where: {
                    user_id: followingsIDs,
                  }
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
              res.status(status.OK)
                .send({
                  success: true,
                  message: finalResult
                });
            }
          }
        }
      } catch (error) {
        res.status(status.BAD_REQUEST)
          .send({
            success: false,
            message: error
          });
      }
    }
  }
}