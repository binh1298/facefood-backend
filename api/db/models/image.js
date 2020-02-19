/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'image_id'
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'image_url'
    },
    uploadedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'uploaded_at'
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
