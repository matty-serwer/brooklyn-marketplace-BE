const Merchant = require("./merchants-model")

const validateMerchantBody = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Missing merchant data." });
  } else if (!req.body.name) {
    res.status(400).json({ message: "Merchant 'name' required. " });
  } else if (!req.body.location_id) {
    res.status(400).json({ message: "Merchant 'location_id' required." });
  } else if (!req.body.user_id) {
    res.status(400).json({ message: "Merchant 'user_id' reqired." });
  } else {
    next();
  }
};

const validateMerchantIdParam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const merchant = await Merchant.getByMerchId(id);
    if(!merchant) {
      res.status(404).json({ message: "Invalid param: id" })
    } else {
      req.merchant = merchant;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error: Failed to find merchant." })
  }
}

module.exports = {
  validateMerchantBody,
  validateMerchantIdParam
};
