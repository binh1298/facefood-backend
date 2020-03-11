'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('image', [{
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_potato.jpg?alt=media&token=f7b5e12e-6819-4c55-ace7-03155106f3f3',
      user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_none.png?alt=media&token=99b44006-6136-4c11-8f8c-3f82d65483e6',
        user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_binh.jpg?alt=media&token=57fb0d7f-4692-4560-b29c-5275e33d6ad6',
        user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_duc.jpg?alt=media&token=389bf32e-1e1d-4662-9875-914b424d74cf',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_loc.jpg?alt=media&token=bdfaa794-c6ea-4658-860a-26f3759855a4',
        user_id: 'da9c7b32-0f05-48f7-b74d-d052df2347d2',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/avatars%2Favatar_none.png?alt=media&token=99b44006-6136-4c11-8f8c-3f82d65483e6',
        user_id: '513a3d36-ff0d-45cb-a052-a554602fe5a0',
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date()
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
