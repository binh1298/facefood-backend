/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Like', {
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
    isLiked: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_liked'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'like'
  });
};
