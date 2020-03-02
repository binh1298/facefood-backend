/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Follow', {
    followId: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      field: 'follow_id'
    },
    //The UserID which is following the followingID
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    //The UserID which is followed by followerID
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
