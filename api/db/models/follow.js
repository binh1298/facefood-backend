/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('follow', {
		followerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'follower_id'
		},
		followingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'following_id'
		}
	}, {
		tableName: 'follow'
	});
};
