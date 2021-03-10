const router = require("express").Router();
const Merchant = require("./merchants-model");
const mid = require("./../middleware/users-middleware");
// const { checkId } = require("./../middleware/check-my-id-middleware");
const restricted = require("./../middleware/restricted");
const {
  validateMerchantBody,
  validateMerchantIdParam,
} = require("./merchants-middleware");

// endpoints

router.get("/", (req, res) => {
  Merchant.get()
    .then((merchants) => {
      res.status(200).json(merchants);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

router.get("/:id", mid.validateUserIdParam, (req, res) => {
  Merchant.getById(req.params.id)
    .then((merchant) => {
      res.status(200).json(merchant);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error retrieving merchant information" });
    });
});

router.post(
  "/",
  restricted,
  mid.validateUserId,
  validateMerchantBody,
  (req, res) => {
    Merchant.insert(req.body)
      .then((merchant) => {
        res.status(201).json(merchant);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ message: "Server error posting merchant information" });
      });
  }
);

router.put(
  "/:id",
  restricted,
  mid.validateUserId,
  validateMerchantBody,
  validateMerchantIdParam,
  (req, res) => {
    Merchant.update(req.params.id, req.body)
      .then((merchant) => {
        res.status(201).json(merchant);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server error updating merchant" });
      });
  }
);

router.delete("/:id", restricted, validateMerchantIdParam, (req, res) => {
  Merchant.remove(req.params.id)
    .then((count) => {
      res.status(201).json({
        message: `Merchant ${req.params.id} deleted. Count: ${count}`,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server error deleting merchant" });
    });
});

module.exports = router;
