/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Role = sequelize.define('Role', {
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'role_id'
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'role_name'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'role',
  });

  Role.associate = function (models) {
    models.Role.hasMany(models.User, {
      foreignKey: "role_id"
    });
  }
  return Role;
};
