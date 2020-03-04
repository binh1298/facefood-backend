/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Unit = sequelize.define('Unit', {
    unitId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'unit_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
  }, {
    tableName: 'unit',
  });

  Unit.associate = function (models) {
    models.Unit.hasMany(models.Ingredient, {
      foreignKey: 'unit_id'
    });
  }
  return Unit;
};
