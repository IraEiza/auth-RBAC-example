const User = require('../api/models/user.model')

function addRelationsToModels() {
  try {

    console.log('Relations added to Models')
  } catch (error) {
    throw new Error('Error adding relations to models', error)
  }
}

module.exports = addRelationsToModels