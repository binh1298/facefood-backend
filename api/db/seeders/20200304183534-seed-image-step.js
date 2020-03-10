'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image', [
      {
        image_url: 'ImageUrl1',
        step_id: 1,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'ImageUrl5',
        step_id: 2,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'ImageUrl5',
        step_id: 3,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'ImageUrl5',
        step_id: 4,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'ImageUrl5',
        step_id: 5,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
