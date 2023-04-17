const { addUsers, loginUsers } = require('../controller')
const router = require('express').Router()

router.post('/signup', addUsers)
router.post('/login', loginUsers)

module.exports = router
