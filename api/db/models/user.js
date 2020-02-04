/* jshint indent: 1 */
const bcrypt = require('bcrypt-nodejs')
const Post = require('./post.js');
const Follow = require('./follow.js');


module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'user_id'
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
            allowNull: false,
            field: 'fullname'
        },
        phoneNumber: {
            type: DataTypes.CHAR,
            allowNull: false,
            field: 'phone_number'
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'role_id'
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
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
        	beforeCreate:function(user, options,callback) {
				var SALT_WORK_FACTOR = 10;
				bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
					if (err) {
						return callback(err, null);
					}
					// generate salt.
					bcrypt.hash(user.password, salt, null, function (err, hash) {
						if (err) {
							return callback(err, null);
						}
						// replace the password with the hash and pass on the
						// user object to whoever should require it.
						user.password = hash;
						return callback(null, user);
					});
				});
			}
		}
    });
    return User;
};
