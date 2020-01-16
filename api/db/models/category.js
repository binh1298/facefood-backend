/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category', {
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
};
