/* jshint indent: 1 */
var Post = require('./Post.js');

module.exports = function (sequelize, DataTypes) {
	var Category = sequelize.define('category', {
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'category_id'
		},
		categoryName: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'category_name'
		}
	}, {
		tableName: 'category'
	});
	Category.hasMany(Post, { as: 'post' });
	return category
};
