const signUpQuery = require('./users/signup')
const loginQuery = require('./users/login')
const postQuery = require('./posts/post')
const getPostsQuery = require('./posts/getPosts')
const commentQuery = require('./comments/comment')
const getCommentsQuery = require('./comments/getComments')

module.exports = { signUpQuery, loginQuery, postQuery, getPostsQuery, commentQuery, getCommentsQuery }
