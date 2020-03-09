/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Follow', {
    //The UserID which is following the followingID
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    //The followingID which is followed by userID
    followingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'following_id'
    },
    isFollowing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_following'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'follow'
  });
};
