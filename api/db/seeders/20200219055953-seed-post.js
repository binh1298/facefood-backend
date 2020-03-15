'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_name: "Simple Potato Croquette ♡",
        description: "Even a small amount of mince is a satisfying dish. Egg-free batter solution for allergy.",
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
        post_name: "Healthy ★ fried grilled potato croquette",
        description: "A simple croquette fried with a little oil of about 5mm depth.We put plenty of healthy ground chicken and onions ♡",
        time_needed: 30,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_potato_2.jpg?alt=media&token=6271bf1e-ab74-40d2-bda3-17c704a92c1b',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
      },
      {
        post_name: "Nori Tsukudani Somen",
        description: "It's good for a little bit of sweet sake, sake, and it's easy to make just by mixing it.",
        time_needed: 60,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_1.jpg?alt=media&token=70c71194-dcfe-4135-927c-89cc2c48a1b8',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Potato Soup",
        description: "Creamy soup with onion and sweet potato scent",
        time_needed: 45,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_ducphi_2.jpg?alt=media&token=8f6fe7ae-a8c6-4c46-bd3c-963ff666de87',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Sweet Potato Miso",
        description: "It is healthy with sweet potatoes and vermicelli with more potatoes even with less meat with rich vegetables. Both the main and side dishes go well with rice!",
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
        post_name: "Mapo-style stir-fried eggplant and sweet potato",
        description: "As it is not spicy in microwave oven, it is not spicy, so it is also for children!",
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
        post_name: "Sweet Potato Cream Stew",
        description: "The sweetness of the potatoes and the delicious taste of the vegetables are so good that it goes with the cream again!",
        time_needed: 15,
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