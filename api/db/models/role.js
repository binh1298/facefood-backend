/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('role', {
		roleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'role_id'
		},
		roleName: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'role_name'
		}
	}, {
		tableName: 'role'
	});
};
