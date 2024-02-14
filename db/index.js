require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dojo', 'ira', 'reboot', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  define: {
    timestamps: false
  }
});


async function checkDB() {
  try {
    await sequelize.authenticate()
    console.log('Connection succesful')
  } catch (error) {
    console.log(error)
  }
}

async function syncModels () {
  try {
    await sequelize.sync({alter: true})
    console.log('Models Synchronized!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sequelize,
  checkDB,
  syncModels
}