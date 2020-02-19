'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_id: 1,
      category_name: "Main dish"
    }, {
      category_id: 2,
      category_name: "Desserts"
    },
    {
      category_id: 3,
      category_name: "Drinks"
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
