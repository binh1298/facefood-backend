/* jshint indent: 1 */
var user = require('./user.js');

module.exports = function (sequelize, DataTypes) {
	var role = sequelize.define('role', {
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
	role.hasMany(user, { as: 'user' });
	return role;
};
