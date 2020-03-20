/* jshint indent: 1 */
const uuid = require('uuid');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id'
    },
    username: {
      type: DataTypes.STRING,
      field: 'username'
    },
    postId: {
      type: DataTypes.INTEGER,
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
