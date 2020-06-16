const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/employeeController");

// giving information to the server
router.post("/create", EmployeeController.create_employee)
router.get("/display", EmployeeController.employee_get_all)
router.delete("/delete", EmployeeController.employee_delete)
router.patch("/update", EmployeeController.update_employee_details)


module.exports = router;