'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        userName: `Bruger${i}`,
        userEmail: `bruger${i}@example.com`, 
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
