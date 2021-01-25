const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { jwtSecret } = require("../../config/secrets");

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

// middleware
const emailCheck = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json({ message: "Email is required" });
  } else {
    next();
  }
};

const registerValidation = (req, res, next) => {
  if (!req.body.username) {
    res.status(400).json({ message: "username is required." });
  } else if (!req.body.password) {
    res.status(400).json({ message: "password is required." });
  } else if (!req.body.email) {
    res.status(400).json({ message: "email is required." });
  } else {
    next();
  }
};

const loginValidation = (req, res, next) => {
  if (!req.body.username) {
    res.status(400).json({ message: "username is required." });
  } else if (!req.body.password) {
    res.status(400).json({ message: "password is required." });
  } else {
    next();
  }
};

router.post("/register", registerValidation, (req, res) => {
  const credentials = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;

  const hash = bcryptjs.hashSync(credentials.password, rounds);

  credentials.password = hash;

  Users.insert(credentials)
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server error registering new user." });
    });
});

router.post("/login", loginValidation, (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username: username })
    .then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = makeToken(user);

        res.status(200).json({
          message: "Welcome to Brooklyn Marketplace API, " + user.username,
          user_id: user.id,
          role: user.role,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

function makeToken(user) {
  const payload = {
    user_id: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
