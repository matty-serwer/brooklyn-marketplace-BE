module.exports = (role) => (req, res, next) => {
  if (req.decodedToken.role === role) {
    next()
  } else {
    res.status(403).json('You do not have permission. Wrong usertype.')
  }
}
