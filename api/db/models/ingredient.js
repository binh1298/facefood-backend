/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Ingredient', {
    ingredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ingredient_id'
    },
    ingredientName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ingredient_name'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'value'
    },
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'unit_id'
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id'
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
    tableName: 'ingredient'
  });
};
