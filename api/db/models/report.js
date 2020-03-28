/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Report = sequelize.define('Report', {
    postId: {
      type: DataTypes.INTEGER,
      field: 'post_id'
    },
    commentId: {
      type: DataTypes.INTEGER,
      field: 'comment_id'
    },
    reportCause:{
      type: DataTypes.STRING,
      field: 'report_cause'
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
    tableName: 'report',
  });

  return Report;
};
