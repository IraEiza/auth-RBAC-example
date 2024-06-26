const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index')

const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  public: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  }
})

module.exports = User