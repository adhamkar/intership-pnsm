'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports.up = async (queryInterface, Sequelize) => {
  await queryInterface.addConstraint('users', {
    fields: ['email'],
    type: 'unique',
    name: 'UQ_email',
  });
};


module.exports.down = async (queryInterface, Sequelize) => {
  await queryInterface.removeConstraint('users', 'UQ_email'); 
};
