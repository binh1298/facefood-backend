/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    imageId: {
      type: DataTypes.UUID,
      primaryKey: true,
      field: 'image_id'
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'image_url'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'updated_at'
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'post_id'
    },
    stepId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'step_id'
    },
  }, {
    tableName: 'image'
  });

  return Image;
};
