const checkId = (req, res, next) => {
  const { user_id } = req.body
  if (req.decodedToken.user_id === user_id) {
    next()
  } else {
    res.status(403).json('You do not have permission. Wrong user ID.')
}
}

module.exports = {
  checkId
}