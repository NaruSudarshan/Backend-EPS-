// routes/adminRoutes.js
const express = require("express");
const { approveLeave } = require("../controllers/adminController");
const { verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/leave/:id/approve", verifyAdmin, approveLeave);

module.exports = router;

