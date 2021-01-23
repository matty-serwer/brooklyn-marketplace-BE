//   get,
//   getById,
//   insert,
//   update,
//   remove,

const router = require("express").Router();
const Item = require("./items-model");
const checkId = require("./../middleware/check-my-id-middleware");

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

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  // checkId(req.body.user_id);
  Item.update(req.params.id)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to post item." });
    });
});

router.delete("/:id", (req, res) => {
  // get item first, then checkId(req.body.user_id);
  Item.delete(req.params.id)
    .then((count) => {
      res.status(201).json({ message: `${count} item(s) deleted`});
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to delete item." });
    });
});
