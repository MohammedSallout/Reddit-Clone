const connection = require('../../config/connection')

const getCommentsQuery = () => {
  const sql = {
    text: 'SELECT users.username, users.avatar, comments.message, comments.created_at, posts.id FROM users INNER JOIN comments ON users.id = comments.user_id INNER JOIN posts ON posts.id = comments.post_id;'
  }

  return connection.query(sql)
}

module.exports = getCommentsQuery
