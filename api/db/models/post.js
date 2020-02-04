/* jshint indent: 1 */
var Like = require('./like.js');
var Comment = require('./comment.js');
var Step = require('./step.js');
var Ingredient = require('./ingredient.js');

module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define('post', {
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
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'category_id'
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
	Post.hasMany(Like, { as: 'like' });
	Post.hasMany(Comment, { as: 'comment' });
	Post.hasMany(Step, { as: 'step' });
	Post.hasMany(Ingredient, { as: 'ingredient' });
	return Post;
};
