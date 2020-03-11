/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    imageUrl: {
      type: DataTypes.STRING(5000000),
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
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'user_id'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_deleted'
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
