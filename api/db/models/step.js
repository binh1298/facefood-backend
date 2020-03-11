/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Step = sequelize.define('Step', {
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description'
    },
    stepCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'step_count'
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id'
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'image_url'
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
    tableName: 'step'
  });
  return Step;
};
