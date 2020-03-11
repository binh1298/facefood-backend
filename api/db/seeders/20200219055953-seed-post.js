'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_name: "Potato Post 1",
        description: "this is a potato description of a post.",
        time_needed: 60,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_potato_1.jpg?alt=media&token=d6081f54-4278-466b-96c5-a1c88079bf7a',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
      },
      {
        post_name: "Potato Post 2",
        description: "THIS IS 2ND DESCRIPTION OF POTATO!",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_potato_2.jpg?alt=media&token=6271bf1e-ab74-40d2-bda3-17c704a92c1b',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
      },
      {
        post_name: "DucPhi 1",
        description: "DucPhi 1's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_1.jpg?alt=media&token=70c71194-dcfe-4135-927c-89cc2c48a1b8',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "DucPhi 2",
        description: "DucPhi 2's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_2.jpg?alt=media&token=8f6fe7ae-a8c6-4c46-bd3c-963ff666de87',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "DucPhi 3",
        description: "DucPhi 3's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_3.jpg?alt=media&token=1d6fd0ba-288e-494e-a632-8974ec9cb526',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "DucPhi 4",
        description: "DucPhi 4's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_4.jpg?alt=media&token=0630b980-80c2-443c-a909-e012186229b4',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "DucPhi 5",
        description: "DucPhi 5's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_5.jpg?alt=media&token=87d3a9e9-9236-476c-aaf1-833032c049b3',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
    ], {});
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