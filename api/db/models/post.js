/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('post', {
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'post_id'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'description'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'user_id'
		},
		isPromoted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_promoted'
		},
		viewCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'view_count'
		},
		likeCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'like_count'
		},
		createdAt: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'created_at'
		},
		timeNeeded: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'time_needed'
		}
	}, {
		tableName: 'post'
	});
};
