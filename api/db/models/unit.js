/* jshint indent: 1 */
const Ingredient = require('./ingredient.js');

module.exports = function (sequelize, DataTypes) {
  const Unit = sequelize.define('unit', {
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true,
      field: 'unit_id'
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'name'
    }
  }, {
    tableName: 'unit',
    associate: function () {
      Unit.hasMany(Ingredient, {as: 'ingredients', foreignKey: 'unitId'});
    }
  });

  return Unit;
};
