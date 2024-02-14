const User = require('../models/user.model')

const getProfile = async (req, res) => {
  try {
    const profile = await User.findByPk(res.locals.user.id)
    if(!profile) return res.status(404).send('User not found')
    delete profile.dataValues.password
    return res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

module.exports = {
  getProfile
}