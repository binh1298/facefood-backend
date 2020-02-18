/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category_name'
    }
  }, {
    tableName: 'category',
  });

  Category.associate = function(models){
    models.Category.hasMany(models.Post);
  }
  return Category;
};
