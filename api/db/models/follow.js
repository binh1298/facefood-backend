/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Follow', {
    followId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'follow_id'
    },
    //The UserID which is following the followingID
    followerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'follower_id'
    },
    //The UserID which is followed by followerID
    followingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'following_id'
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
