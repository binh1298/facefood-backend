/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Ingredient', {
    ingredientId: {
      type: DataTypes.UUID,
      primaryKey: true,
      field: 'ingredient_id'
    },
    name: {
      type: DataTypes.STRING,
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
