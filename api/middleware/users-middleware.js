const User = require('./../users/users-model');

const validateUserId = async (req, res, next) => {
  const id = req.body.user_id;
  try {
    const user = await User.getById(id);
    if (!user) {
      res.status(404).json({ message: "Invalid user id" });
    } else {
      // req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user from database",
    });
  }
};

const validateUserIdParam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.getById(id);
    if (!user) {
      res.status(404).json({ message: "Invalid user id" });
    } else {
      // req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user from database",
    });
  }
};

module.exports = {
  validateUserId,
  validateUserIdParam
}