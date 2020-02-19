'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      category_id: '814c39e1-c76a-4b0c-9d1e-714d601cdcff',
      category_name: "Main dish",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_id: '2683d17d-ac7a-4f4e-8b3f-046c8004519a',
      category_name: "Desserts",
      created_at: new Date(),
      updated_at: new Date()
    }, {
      category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
      category_name: "Drinks",
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
