const { checkAuth, addUsers, loginUsers, addPosts, getPosts } = require('../controller')
const router = require('express').Router()

router.post('/signup', addUsers)
router.post('/login', loginUsers)
router.post('/add-post', checkAuth, addPosts)
router.get('/posts', getPosts)

module.exports = router
