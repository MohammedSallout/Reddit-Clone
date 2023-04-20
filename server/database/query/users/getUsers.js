const connection = require('../../config/connection')

const getUsersQuery = (myToken) => {
  const userId = myToken.id
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

const getUsersIdQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

module.exports = { getUsersQuery, getUsersIdQuery }
