"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT(11) NOT NULL AUTO_INCREMENT,
      nome VARCHAR(45) NOT NULL,
      sobrenome VARCHAR(45) NOT NULL,
      email VARCHAR(45) NOT NULL,
      createdAt DATETIME NOT NULL,
      updatedAt DATETIME NOT NULL,
      PRIMARY KEY (id))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8
    `);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
