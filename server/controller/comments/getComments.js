const { getCommentsQuery } = require('../../database/query')

const getComments = (req, res) => {
  getCommentsQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = getComments
