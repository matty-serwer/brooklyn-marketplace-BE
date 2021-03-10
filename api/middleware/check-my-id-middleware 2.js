module.exports = (user_id) => (req, res, next) => {
  if (req.decodedToken.user_id === user_id) {
    next()
  } else {
    res.status(403).json('You do not have permission. Wrong user ID.')
  }
}