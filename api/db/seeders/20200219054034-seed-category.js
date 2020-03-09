'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_name: "Main dish",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_name: "Desserts",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_name: "Drinks",
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
