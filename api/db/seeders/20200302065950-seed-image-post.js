'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image', [{
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_potato_1.jpg?alt=media&token=d6081f54-4278-466b-96c5-a1c88079bf7a',
      post_id: 1,
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_potato_2.jpg?alt=media&token=6271bf1e-ab74-40d2-bda3-17c704a92c1b',
        post_id: 2,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_1.jpg?alt=media&token=70c71194-dcfe-4135-927c-89cc2c48a1b8',
        post_id: 3,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_2.jpg?alt=media&token=8f6fe7ae-a8c6-4c46-bd3c-963ff666de87',
        post_id: 4,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_3.jpg?alt=media&token=1d6fd0ba-288e-494e-a632-8974ec9cb526',
        post_id: 5,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_4.jpg?alt=media&token=0630b980-80c2-443c-a909-e012186229b4',
        post_id: 6,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_5.jpg?alt=media&token=87d3a9e9-9236-476c-aaf1-833032c049b3',
        post_id: 7,
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
