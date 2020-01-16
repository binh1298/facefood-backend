/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('unit', {
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
};
