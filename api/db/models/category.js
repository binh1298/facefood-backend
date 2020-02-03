/* jshint indent: 1 */
var post = require('./post.js');

module.exports = function (sequelize, DataTypes) {
	var category = sequelize.define('category', {
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
	category.hasMany(post, { as: 'post' });
	return category
};
