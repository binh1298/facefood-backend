'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image', [
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_1.jpg?alt=media&token=f8744384-1524-4fda-9d88-e385a6d9abd5',
        step_id: 1,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_3.jpg?alt=media&token=c9b36bc0-8ab2-4a90-9d94-8013a5ed40a8',
        step_id: 2,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_4.jpg?alt=media&token=38458cfe-0098-4062-b324-0a96f3890788',
        step_id: 3,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_6.jpg?alt=media&token=47e78846-0f08-426e-83b9-fbb41021240c',
        step_id: 4,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_other_1.jpg?alt=media&token=4eb68580-cf6f-4793-8ef1-892ef3fc9058',
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
