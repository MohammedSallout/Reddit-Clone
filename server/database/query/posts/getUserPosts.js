const connection = require('../../config/connection')

const getUserPostsQuery = (myToken) => {
  const userId = myToken.id
  const sql = {
    text: 'SELECT posts.id, posts.content, users.username, users.avatar FROM posts JOIN users ON posts.user_id = users.id WHERE posts.user_id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

module.exports = getUserPostsQuery
