const connection = require('../../config/connection')

const getPostsQuery = () => {
  const sql = {
    text: 'SELECT users.username, users.avatar, posts.id, posts.content, posts.created_at FROM users INNER JOIN posts ON users.id = posts.user_id '
  }

  return connection.query(sql)
}

module.exports = getPostsQuery
