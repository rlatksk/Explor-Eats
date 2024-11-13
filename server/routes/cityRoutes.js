const express = require("express");
const {
  createCity,
  getCity,
  updateCity,
  deleteCity,
} = require("../controllers/cityController");
const router = express.Router();


router.post("/city", createCity);
router.get("/city", getCity);
router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

module.exports = router;
