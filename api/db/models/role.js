/* jshint indent: 1 */
<<<<<<< HEAD

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('role', {
=======
var user = require('./user.js');

module.exports = function (sequelize, DataTypes) {
	var role = sequelize.define('role', {
>>>>>>> 228ece6b27e2c8d8e680a8035910bef61fcc1966
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
<<<<<<< HEAD
=======
	role.hasMany(user, { as: 'user' });
	return role;
>>>>>>> 228ece6b27e2c8d8e680a8035910bef61fcc1966
};
