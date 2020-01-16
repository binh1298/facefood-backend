/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comment', {
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'post_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'user_id'
		},
		content: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'content'
		}
	}, {
		tableName: 'comment'
	});
};
