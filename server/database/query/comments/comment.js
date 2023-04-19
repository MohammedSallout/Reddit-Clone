const connection = require('../../config/connection')

const commentQuery = (commentData) => {
  const { comment, postId, myToken } = commentData
  const userId = myToken.id

  const sql = {
    text: 'INSERT INTO comments (message, user_id, post_id) VALUES ($1 , $2, $3)',
    values: [comment, userId, postId]
  }

  return connection.query(sql)
}

module.exports = commentQuery
