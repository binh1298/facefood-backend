/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Follow', {
    followId: {
      type: DataTypes.UUID,
      primaryKey: true,
      field: 'follow_id'
    },
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'follower_id'
    },
    followingId: {
      type: DataTypes.INTEGER,
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
