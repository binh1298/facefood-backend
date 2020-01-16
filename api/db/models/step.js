/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('step', {
		stepId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'step_id'
		},
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'post_id'
		},
		imageUrl: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'image_url'
		},
		description: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'step'
	});
};
