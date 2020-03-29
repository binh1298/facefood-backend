'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_name: "Main course",
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
      category_name: "Appetizer",
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
