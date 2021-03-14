


import Sequelize from 'sequelize'
const sequelize = new Sequelize('teste', 'dev01_user', 'xoWad3IZXSUZ', {
    host: 'ineditta.net.br',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Falha: "+erro)
})