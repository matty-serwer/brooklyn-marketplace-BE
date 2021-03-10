const router = require("express").Router();
const Category = require("./categories-model");
const checkRole = require("./../middleware/check-role-middleware");
const restricted = require("./../middleware/restricted");

router.get("/", (req, res) => {
  Category.get()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve categories" });
    });
});

router.post("/", restricted, checkRole("admin"), (req, res) => {
  Category.insert(req.body)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve categories" });
    });
});

router.delete("/:id", restricted, checkRole("admin"), (req, res) => {
  Category.remove(req.params.id)
    .then((count) => {
      res.status(201).json({ message: `${count} category deleted` });
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to delete item." });
    });
});

module.exports = router;