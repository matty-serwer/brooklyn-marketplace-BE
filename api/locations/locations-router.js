const router = require("express").Router();
const Location = require("./locations-model");
const checkRole = require("./../middleware/check-role-middleware");
const restricted = require("./../middleware/restricted");

router.get("/", (req, res) => {
  Location.get()
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve locations" });
    });
});

router.post("/", restricted, checkRole("admin"), (req, res) => {
  Location.insert(req.body)
    .then((location) => {
      res.status(201).json(location);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to post new location" });
    });
});

router.delete("/:id", restricted, checkRole("admin"), (req, res) => {
  Location.remove(req.params.id)
    .then((count) => {
      res.status(201).json({ message: `${count} location(s) deleted` });
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to delete location." });
    });
});

module.exports = router;
