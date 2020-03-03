/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Step = sequelize.define('Step', {
    stepId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'step_id'
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'image_url'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description'
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'post_id'
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
  Step.associate = function (models) {
    models.Step.hasMany(models.Image, {
      foreignKey: "step_id"
    });
  }
  return Step;
};
