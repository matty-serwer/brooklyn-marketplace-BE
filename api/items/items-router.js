const router = require("express").Router();
const Item = require("./items-model");
const mid = require("./../middleware/users-middleware");
const checkId = require("./../middleware/check-my-id-middleware");
const restricted = require("./../middleware/restricted");
const { validateItemBody, validateItemIdParam } = require("./items-middleware");

router.get("/", (req, res) => {
  Item.get()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve items." });
    });
});

router.get("/:id", validateItemIdParam, (req, res) => {
  Item.getById(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve item." });
    });
});

router.post("/", restricted, mid.validateUserId, validateItemBody, (req, res) => {
  // checkId(req.body.user_id);
  Item.insert(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to post item." });
    });
});

router.put("/:id", restricted, mid.validateUserId, validateItemIdParam, validateItemBody, (req, res) => {
  // checkId(req.body.user_id);
  Item.update(req.params.id, req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to post item." });
    });
});

router.delete("/:id", restricted, mid.validateUserId, validateItemIdParam, (req, res) => {
  // get item first, then checkId(req.body.user_id);
  Item.remove(req.params.id)
    .then((count) => {
      res.status(201).json({ message: `${count} item(s) deleted` });
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to delete item." });
    });
});

module.exports = router;
