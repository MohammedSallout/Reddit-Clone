const connection = require('../../config/connection')

const postQuery = (postData) => {
  const { post, myToken } = postData
  const userId = myToken.id

  const sql = {
    text: 'INSERT INTO posts (content, user_id) VALUES ($1 , $2)',
    values: [post, userId]
  }

  return connection.query(sql)
}

module.exports = postQuery
