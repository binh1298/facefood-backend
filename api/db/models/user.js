/* jshint indent: 1 */
const bcrypt = require('bcryptjs')
const Post = require('./post.js');
const Follow = require('./follow.js');
const uuid = require('uuid/v4');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.UUID,
      defaultValue: uuid(),
      primaryKey: true,
      field: 'user_id',
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    fullname: {
      type: DataTypes.STRING,
      field: 'fullname'
    },
    phoneNumber: {
      type: DataTypes.STRING,
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
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'updated_at'
    }
  }, {
    tableName: 'user',
    associate: function () {
      User.hasMany(Post, {as: 'posts', foreignKey: 'user_id'});
      User.hasMany(Follow, {as: 'follows', foreignKey: 'user_id'});
    },
    hooks: {
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
