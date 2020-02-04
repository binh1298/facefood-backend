/* jshint indent: 1 */
var User = require('./user.js');

module.exports = function (sequelize, DataTypes) {
	var Role = sequelize.define('role', {
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
	Role.hasMany(User, { as: 'user' });
	return Role;
};
