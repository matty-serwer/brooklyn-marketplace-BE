module.exports = () => (req, res, next) => {
  req.body.my_id = req.decodedToken.user_id
  next()
}