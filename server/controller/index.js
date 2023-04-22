const jwt = require('jsonwebtoken')
const addUsers = require('./users/signup')
const loginUsers = require('./users/login')
const logout = require('./users/logout')
const { getUsers, getUsersId, getUserPostsId } = require('./users/getUsers')
const profilePage = require('./users/userProfile')
const addPosts = require('./posts/addPosts')
const deletePost = require('./posts/deletePost')
const getPosts = require('./posts/getPosts')
const getUserPosts = require('./posts/getUserPosts')
const addComments = require('./comments/addComments')
const getComments = require('./comments/getComments')

const checkAuth = (req, res, next) => {
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ msg: 'verify token error' })
      } else {
        req.myToken = decoded
        next()
      }
    })
  } else {
    res.redirect('/html')
  }
}

module.exports = { checkAuth, addUsers, loginUsers, profilePage, getUserPostsId, getUsersId, logout, addPosts, deletePost, getPosts, getUserPosts, addComments, getComments, getUsers }
