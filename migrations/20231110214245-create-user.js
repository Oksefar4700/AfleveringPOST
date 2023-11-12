'use strict';

// Eksporterer et objekt med to forskellige funktion "up" og "down"
module.exports = {

  //"Up" funktionen bruges til, at oprette tabellen vores tabel users i vores database.
  async up(queryInterface, Sequelize) {
    //Bruger queryinterface til, at oprette en ny tabel.
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      userEmail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
