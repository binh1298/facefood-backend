'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      username: 'SpacePotato',
      password: 'potatopassword',
      email: 'space@potato.com',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        username: 'BinhPham',
        password: 'binhphampassword',
        email: 'binh@pham.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'DucPhi',
        password: 'ducphipassword',
        email: 'duc@phi.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
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
