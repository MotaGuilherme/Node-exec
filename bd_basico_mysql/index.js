
const Sequelize = require('Sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "um titulo",
    conteudo: "33333333"

})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER 
    },
    email: {
        type: Sequelize.STRING
    }

})

Usuario.create({
    nome: "Joao",
    sobrenome: "lopes",
    idade: 18,
    email: "jaoo@gmail.com"
})