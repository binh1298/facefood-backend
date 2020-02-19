'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      user_id: uuid(),
      username: 'SpacePotato',
      password: 'potatopassword',
      email: 'space@potato.com',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: uuid(),
      username: 'BinhPham',
      password: 'binhphampassword',
      email: 'binh@pham.com',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: uuid(),
      username: 'DucPhi',
      password: 'ducphipassword',
      email: 'duc@phi.com',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: uuid(),
      username: 'LocTrinh',
      password: 'loctrinhpassword',
      email: 'loc@trinh.com',
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
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
