/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('like', {
    likeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true,
      field: 'like_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id'
    }
  }, {
    tableName: 'like'
  });
};
