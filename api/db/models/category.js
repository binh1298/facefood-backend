/* jshint indent: 1 */
const Post = require('./post.js');

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
    associate: function () {
      Category.hasMany(Post, {as: 'posts', foreignKey: 'categoryId'})
    }
  });
  return Category;
};
