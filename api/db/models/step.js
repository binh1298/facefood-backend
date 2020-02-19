/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Step = sequelize.define('Step', {
    stepId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true,
      field: 'step_id'
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description'
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id'
    },
  }, {
    tableName: 'step'
  });
  Step.associate = function(models){
    models.Step.hasMany(models.Image,{
      foreignKey:"step_id"
    });
  }
  return Step;
};
