'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_name: "Main dish",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_name: "Dessert",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_name: "Soup",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_name: "Breakfast",
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
