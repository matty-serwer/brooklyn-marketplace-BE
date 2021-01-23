const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets')

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

// middleware
const emailCheck = (req, res, next) => {
  if(!req.body.email) {
    res.status(400).json({ message: "Email is required" })
  } else {
    next();
  }
}

router.post("/register", emailCheck, (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.insert(credentials)
      .then(user => {
        res.status(201).json({ data: user });
      })
      .catch(error => {
        res.status(500).json({ message: "Server error registering new user." });
      });
  } else {
    res.status(400).json({
      message: "Please provide username and password.",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user);

          res.status(200).json({
            message: "Welcome to Brooklyn Marketplace API, " + user.username,
            user_id: user.id,
            role: user.role,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

function makeToken(user) {
  const payload = {
    user_id: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: '10000s',
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
