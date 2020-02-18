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
    }
  }, {
    tableName: 'image'
  });

  return Image;
};
