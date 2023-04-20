const jwt = require('jsonwebtoken')
const { getUsersQuery, getUsersIdQuery } = require('../../database/query')

const getUsers = (req, res) => {
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ msg: 'verify token error' })
      } else {
        req.myToken = decoded
      }
    })
  }
  const { myToken } = req
  getUsersQuery(myToken)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

const getUsersId = (req, res) => {
  const userId = req.params.id
  getUsersIdQuery(userId)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = { getUsers, getUsersId }