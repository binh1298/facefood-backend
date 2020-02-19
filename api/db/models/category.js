/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category_name'
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
    tableName: 'category',
  });

  Category.associate = function (models) {
    models.Category.hasMany(models.Post, {
      foreignKey: 'category_id'
    });
  }
  return Category;
};
