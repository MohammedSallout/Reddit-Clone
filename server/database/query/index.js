const signUpQuery = require('./users/signup')
const loginQuery = require('./users/login')
const postQuery = require('./posts/post')
const getPostsQuery = require('./posts/getPosts')

module.exports = { signUpQuery, loginQuery, postQuery, getPostsQuery }
