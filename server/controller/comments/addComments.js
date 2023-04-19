const { commentSchema } = require('../../validation/schema')
const { commentQuery } = require('../../database/query')

const addComments = (req, res) => {
  const { comment, postId } = req.body
  const { myToken } = req

  commentSchema
    .validateAsync({ comment }, { abortEarly: false })
    .then(() => {
      commentQuery({ comment, postId, myToken })
        .then(() => {
          res.status(201).json({
            error: false,
            data: {
              message: 'Your comment has been created successfully'
            }
          })
        })
        .catch((err) => {
          console.error(err)
          res.status(500).json({
            error: true,
            data: {
              message: 'An error occurred while creating your comment'
            }
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({
        error: true,
        data: {
          message: 'Invalid input data'
        }
      })
    })
}

module.exports = addComments
