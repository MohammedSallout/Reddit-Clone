const { getCommentsQuery } = require('../../database/query')

const getComments = (req, res) => {
  const postId = req.params.postId
  getCommentsQuery(postId)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = getComments
