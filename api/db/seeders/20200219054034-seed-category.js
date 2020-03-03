'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_id: 1,
      category_name: "Main dish",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_id: 2,
      category_name: "Desserts",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_id: 3,
      category_name: "Drinks",
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
