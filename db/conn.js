const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc','root','qwe123!@#', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conectamos ao banco')
} catch (error) {
    console.log('não foi possivel conectar', error)
}

module.exports = sequelize

