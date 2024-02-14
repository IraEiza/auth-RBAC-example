const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middlewares/index')

const {
  getProfile
} = require('../controllers/user.controller')

router.get('/profile', checkAuth, checkAdmin, getProfile)

module.exports = router