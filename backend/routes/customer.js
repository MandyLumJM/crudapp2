const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/customer");

router.post("/register", CustomerController.customer_create);
router.get("/displayCustomer", CustomerController.customers_get_all);

module.exports = router;