"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
    INSERT INTO usuarios (nome, sobrenome, email, createdAt, updatedAt)
VALUES
    ('Matheus', 'Rafael Thomas Ramos','matheus_rafael_ramos@gerj.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Laís', 'Liz Agatha Aragão','laislizaragao@moppe.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Olivia', 'Heloise Luciana Almada','olivia.heloise.almada@flextroniocs.copm.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Clarice', 'Priscila Lavínia Rodrigues','rodrigues83@institutodainfancia.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Valentina', 'Marina Sarah Pereira','valentina-pereira74@saboia.me', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Vitória', 'Agatha Almeida','vitoria_agatha_almeida@valedesign.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Kauê', 'Lorenzo Galvão','kaue_galvao@gimail.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Vinicius', 'Enzo Calebe da Conceição','vinicius.daconceicao@prcondominios.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Luzia', 'Marcela Viana','luziamarcelaviana@libero.it', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Analu', 'Hadassa Agatha Assis','analu-assis75@agltda.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Nelson', 'Nicolas Ribeiro','nelson_nicolas_ribeiro@mac.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
    ('Helena', 'Mariah Cavalcanti','helena_cavalcanti@commscope.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Antônia', 'Malu Isis Barros','antonia.malu.barros@arecocomercial.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Yasmin', 'Lorena Nascimento','yasmin-nascimento98@uzgames.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Juan', 'Benjamin Baptista','juan_baptista@etep.edu.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Larissa', 'Lorena Pietra Santos','larissalorenasantos@atualecomex.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Rebeca', 'Rayssa Heloisa da Costa','rebeca-dacosta95@boll.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Lara', 'Mariana Elisa Alves','lara_alves@advogadosempresariais.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Juliana', 'Luiza da Paz','juliana.luiza.dapaz@eletrovip.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Priscila', 'Malu Raquel Carvalho','priscilamalucarvalho@mailnull.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Márcio', 'Fábio Vieira','marcio_vieira@polifiltro.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Tereza', 'Bruna Bernardes','tereza.bruna.bernardes@eptv.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Bruno', 'Anthony Marcos Figueiredo','bruno.anthony.figueiredo@rodrigofranco.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Helena', 'Natália Caroline Farias','helena-farias79@dcazzainteriores.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Sabrina', 'Emily Rosângela de Paula','sabrinaemilydepaula@yool.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Yuri', 'Pedro Pedro Henrique da Rosa','yuri_darosa@grupoaguaviva.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Luciana', 'Ayla Jesus','luciana_ayla_jesus@nhrtaxiaereo.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Natália', 'Ayla Lima','nataliaaylalima@integrasjc.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Joaquim', 'Samuel Nicolas Porto','joaquim_porto@its.jnj.com', '2022-04-08 13:06:49', '2022-04-08 13:06:49'),
   ('Larissa', 'Gabriela Rocha','rocha@structureesquadrias.com.br', '2022-04-08 13:06:49', '2022-04-08 13:06:49');

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
