/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true,
      field: 'comment_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
    }
  }, {
    tableName: 'comment'
  });
};
