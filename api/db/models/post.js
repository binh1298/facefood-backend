/* jshint indent: 1 */
const Like = require('./like.js');
const Comment = require('./comment.js');
const Step = require('./step.js');
const Ingredient = require('./ingredient.js');

module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'post_id'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    timeNeeded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'time_needed'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_deleted'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    }

  }, {
    tableName: 'post',
    associate: function () {
      Post.hasMany(Like, {as: 'likes', foreignKey: 'postId'});
      Post.hasMany(Comment, {as: 'comments', foreignKey: 'postId'});
      Post.hasMany(Step, {as: 'steps', foreignKey: 'postId'});
      Post.hasMany(Ingredient, {as: 'ingredients', foreignKey: 'postId'});
    }
  });
  return Post;
};
