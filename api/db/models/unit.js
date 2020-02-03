/* jshint indent: 1 */
var ingredient = require('./ingredient.js')
module.exports = function (sequelize, DataTypes) {
	var unit = sequelize.define('unit', {
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'unit_id'
		},
		name: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'unit'
	});
	unit.hasMany(ingredient, { as: 'ingredient' });
	return unit;
};
