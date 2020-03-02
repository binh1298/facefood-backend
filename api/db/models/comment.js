/* jshint indent: 1 */
const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    commentId: {
      type: DataTypes.UUID,
      defaultValue: uuid.v4(),
      primaryKey: true,
      field: 'comment_id'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'post_id'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_deleted'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
  }, {
    tableName: 'comment'
  });
};
