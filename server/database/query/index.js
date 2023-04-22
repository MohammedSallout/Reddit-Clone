const signUpQuery = require('./users/signup')
const loginQuery = require('./users/login')
const { getUsersQuery, getUsersIdQuery } = require('./users/getUsers')
const postQuery = require('./posts/post')
const getPostsQuery = require('./posts/getPosts')
const getUserPostsQuery = require('./posts/getUserPosts')
const commentQuery = require('./comments/comment')
const getCommentsQuery = require('./comments/getComments')
const getUserPostsIdQuery = require('./posts/getUserPostsId')
const deletePostQuery = require('./posts/deletePost')

module.exports = { signUpQuery, getUserPostsIdQuery, loginQuery, getUsersIdQuery, postQuery, deletePostQuery, getPostsQuery, getUserPostsQuery, commentQuery, getCommentsQuery, getUsersQuery }
