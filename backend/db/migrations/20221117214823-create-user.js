'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30),
        // allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(30),
        // allowNull: false,
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique:true
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique:true
      },
      hashedPassword: {   
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE
      }
    },options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users',options);
  }
};