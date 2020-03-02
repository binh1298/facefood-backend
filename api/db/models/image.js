/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    imageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'image_id'
    },
    imageUrl: {
      type: DataTypes.BLOB,
      allowNull: false,
      field: 'image_url'
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
  }, {
    tableName: 'image'
  });

  return Image;
};
