const connection = require('../../config/connection')

const getCommentsQuery = (postId) => {
  const sql = {
    text: 'SELECT users.username, users.avatar, comments.user_id, comments.message, comments.created_at, posts.id FROM users INNER JOIN comments ON users.id = comments.user_id INNER JOIN posts ON posts.id = comments.post_id WHERE posts.id = $1;',
    values: [postId]
  }

  return connection.query(sql)
}

module.exports = getCommentsQuery
