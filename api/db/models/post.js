/* jshint indent: 1 */
<<<<<<< HEAD

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('post', {
=======
var like = require('./like.js');
var comment = require('./comment.js');
var step = require('./step.js');
var ingredient = require('./ingredient.js');

module.exports = function (sequelize, DataTypes) {
	var post = sequelize.define('post', {
>>>>>>> 228ece6b27e2c8d8e680a8035910bef61fcc1966
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
<<<<<<< HEAD
=======
	post.hasMany(like, { as: 'like' });
	post.hasMany(comment, { as: 'comment' });
	post.hasMany(step, { as: 'step' });
	post.hasMany(ingredient, { as: 'ingredient' });
	return post;
>>>>>>> 228ece6b27e2c8d8e680a8035910bef61fcc1966
};
