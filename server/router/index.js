const { checkAuth, addUsers, getUsersId, getUserPostsId, loginUsers, addPosts, getPosts, profilePage, getUserPosts, logout, addComments, getComments, getUsers } = require('../controller')
const router = require('express').Router()

router.post('/signup', addUsers)
router.post('/login', loginUsers)
router.post('/logout', logout)
router.post('/add-post', checkAuth, addPosts)
router.get('/posts', getPosts)
router.get('/user-posts', getUserPosts)
router.post('/add-comment', checkAuth, addComments)
router.get('/comments/:postId', getComments)
router.get('/users', getUsers)
router.get('/users/:id', getUsersId)
router.get('/profile/:userId', profilePage)
router.get('/profile/user/:userId', getUserPostsId)

module.exports = router
