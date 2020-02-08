/* jshint indent: 1 */
const bcrypt = require('bcryptjs')
const Post = require('./post.js');
const Follow = require('./follow.js');


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'user_id',
            autoIncrement: true
        },
        username: {
            type: DataTypes.CHAR,
            allowNull: false,
            field: 'username'
        },
        password: {
            type: DataTypes.CHAR,
            allowNull: false,
            field: 'password'
        },
        email: {
            type: DataTypes.CHAR,
            allowNull: false,
            field: 'email'
        },
        fullname: {
            type: DataTypes.CHAR,
            field: 'fullname'
        },
        phoneNumber: {
            type: DataTypes.CHAR,
            field: 'phone_number'
        },
        roleId: {
            type: DataTypes.INTEGER,
            field: 'role_id'
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'is_deleted'
        }
    }, {
        tableName: 'user',
        associate: function () {
            User.hasMany(Post, {as: 'posts', foreignKey: 'userId'});
            User.hasMany(Follow, {as: 'follows', foreignKey: 'userId'});
        },
        classMethods: {
            // Class method User.comparePassword() to compare hash vs.
            // provided password
            comparePassword: function (password, hash, callback) {
                // if bcrypt.compare() succeeds it'll call our function with
                // (null, true), if password doesn't match it calls our function
                // with (null, false), if it errors out it calls our function
                // with (err, null)
                bcrypt.compare(password, hash, function (err, isMatch) {
                    if (err) {
                        return callback(err, null);
                    } else {
                        callback(null, isMatch);
                    }
                });
            },
        },
		hooks:{
			// This hook is called when an entry is being added to the back end.
			// This method is used to hash the password before storing it
			// in our database.
        	beforeCreate: (user, options) => {
				const SALT_WORK_FACTOR = 10;
				const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
                const hash = bcrypt.hashSync(user.password, salt);
                user.password = hash;
			}
		}
    });
    return User;
};
