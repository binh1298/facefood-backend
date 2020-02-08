'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      user_id: 100,
      username: 'SpacePotato',
      password: 'potatopassword',
      email: 'space@potato.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        user_id: 200,
        username: 'BinhPham',
        password: 'binhphampassword',
        email: 'binh@pham.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 300,
        username: 'DucPhi',
        password: 'ducphipassword',
        email: 'duc@phi.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 400,
        username: 'LocTrinh',
        password: 'loctrinhpassword',
        email: 'loc@trinh.com',
        createdAt: new Date(),
        updatedAt: new Date()
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
