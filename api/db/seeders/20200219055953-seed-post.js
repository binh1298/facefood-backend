'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_name: "Spaghetti in a Couple Easy Steps",
        description: "It's really easy to make spaghetti at home! Using jarred tomato sauce means you can have dinner on the table in under a half hour, too. Keep on reading to find out how to make a basic spaghetti with meat sauce!",
        time_needed: 30,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_9.jpg?alt=media&token=7450ceec-9674-47ea-93d3-4f87acde4e8f',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'AnhBui',
      },
      {
        post_name: "Healthy ★ fried grilled potato croquette",
        description: "A simple croquette fried with a little oil of about 5mm depth.We put plenty of healthy ground chicken and onions ♡",
        time_needed: 30,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_2.jpg?alt=media&token=2a60a655-def3-4f68-b452-e7d08281bcf3',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'AnhBui',
      },
      {
        post_name: "Perfect ☆ guacamole toast!",
        description: "Enjoy a simple guacamole with a thick layer ♪ If you eat the beautiful skin ingredients of avocado, you will get two rabbits (＾＾) v",
        time_needed: 15,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_3.jpg?alt=media&token=5ef83d64-c255-4289-a88a-27b140e930d8',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Sandwich that is easy to make and eat",
        description: "It is delicious and full of nutrition ♪",
        time_needed: 20,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_4.jpg?alt=media&token=eb820859-baa7-4ded-9874-8d36d3746885',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Sticky fluffy pancakes with banana and yogurt",
        description: "You can make thick, sweet and moist fluffy pancakes with mellow banana and refreshing yogurt without eggs ♪",
        time_needed: 15,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_5.jpg?alt=media&token=a271bcca-7c60-4fad-b5ee-6dd30ea63d4e',
        user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
        username: 'BinhPham',
      },
      {
        post_name: "Mapo-style stir-fried eggplant and sweet potato",
        description: "As it is not spicy in microwave oven, it is not spicy, so it is also for children!",
        time_needed: 45,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_6.jpg?alt=media&token=0a7259af-263d-460c-99d8-16a22490de0f',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Simple! Perfect for lunch ♪ Yakitori bowl",
        description: "Sweet and spicy sauce and chicken thighs are the best. Very delicious with rice!",
        time_needed: 20,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_7.jpg?alt=media&token=ef42a43a-b70d-4e07-b5e9-c9dcccf5d8cf',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_name: "Fruit yogurt",
        description: "The refreshing yogurt and the sweetness of the fruit match well and are easy to eat.",
        time_needed: 15,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_8.jpg?alt=media&token=3afa4712-36b2-49e2-9137-018726816362',
        user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
        username: 'BinhPham',
      },

      {
        post_name: "Simple Potato Croquette ♡",
        description: "Even a small amount of mince is a satisfying dish. Egg-free batter solution for allergy.",
        time_needed: 60,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/posts%2Fpost_1.jpg?alt=media&token=0171ccd1-773d-40db-bcbe-4a2b14a88b1c',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'AnhBui',
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