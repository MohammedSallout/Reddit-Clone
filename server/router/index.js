const { addUsers } = require('../controller')
const router = require('express').Router()

router.post('/signup', addUsers)

module.exports = router
