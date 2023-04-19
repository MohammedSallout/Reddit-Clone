const { checkAuth, addUsers, loginUsers, addPosts, getPosts, logout, addComments, getComments } = require('../controller')
const router = require('express').Router()

router.post('/signup', addUsers)
router.post('/login', loginUsers)
router.post('/logout', logout)
router.post('/add-post', checkAuth, addPosts)
router.get('/posts', getPosts)
router.post('/add-comment', checkAuth, addComments)
router.get('/comments', getComments)

module.exports = router
