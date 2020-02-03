/* jshint indent: 1 */
var Ingredient = require('./Ingredient.js');

module.exports = function (sequelize, DataTypes) {
	var Unit = sequelize.define('unit', {
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
	Unit.hasMany(Ingredient, { as: 'ingredient' });
	return Unit;
};
