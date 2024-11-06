// routes/employeeRoutes.js
const express = require("express");
const { viewPayroll, requestLeave } = require("../controllers/employeeController");
const { verifyEmployee } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/payroll", verifyEmployee, viewPayroll);
router.post("/leave", verifyEmployee, requestLeave);

module.exports = router;
