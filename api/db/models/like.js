/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Like', {
    likeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'like_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
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
