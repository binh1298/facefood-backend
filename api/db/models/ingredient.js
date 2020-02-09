/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ingredient', {
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true,
      field: 'ingredient_id'
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'name'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'value'
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'cost'
    }
  }, {
    tableName: 'ingredient'
  });
};
