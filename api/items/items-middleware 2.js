const Item = require("./items-model")

const validateItemBody = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Missing item data." });
  } else if (!req.body.name) {
    res.status(400).json({ message: "Item 'name' required. " });
  } else if (!req.body.category_id) {
    res.status(400).json({ message: "Item 'category_id' required." });
  } else if (!req.body.user_id) {
    res.status(400).json({ message: "Item 'user_id' reqired." });
  } else {
    next();
  }
};

const validateItemIdParam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await Item.getById(id);
    if(!item) {
      res.status(404).json({ message: "Invalid param: id" })
    } else {
      req.item = item;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error: Failed to find item." })
  }
}

module.exports = {
  validateItemBody,
  validateItemIdParam
};
