const logout = (req, res) => {
  res.clearCookie('token').redirect('/html')
}

module.exports = logout
