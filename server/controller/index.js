const jwt = require('jsonwebtoken')
const addUsers = require('./users/signup')
const loginUsers = require('./users/login')
const logout = require('./users/logout')
const { getUsers, getUsersId } = require('./users/getUsers')
const addPosts = require('./posts/addPosts')
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

module.exports = { checkAuth, addUsers, loginUsers, getUsersId, logout, addPosts, getPosts, getUserPosts, addComments, getComments, getUsers }
