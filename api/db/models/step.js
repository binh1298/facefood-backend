/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Step = sequelize.define('Step', {
    stepId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'step_id'
    },
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
