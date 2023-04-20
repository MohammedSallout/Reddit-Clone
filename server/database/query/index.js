const signUpQuery = require('./users/signup')
const loginQuery = require('./users/login')
const { getUsersQuery, getUsersIdQuery } = require('./users/getUsers')
const postQuery = require('./posts/post')
const getPostsQuery = require('./posts/getPosts')
const getUserPostsQuery = require('./posts/getUserPosts')
const commentQuery = require('./comments/comment')
const getCommentsQuery = require('./comments/getComments')

module.exports = { signUpQuery, loginQuery, getUsersIdQuery, postQuery, getPostsQuery, getUserPostsQuery, commentQuery, getCommentsQuery, getUsersQuery }
