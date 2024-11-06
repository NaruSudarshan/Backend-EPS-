const mongoose = require("mongoose");

const LeaveRequestSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    startDate: Date,
    endDate: Date,
    reason: String,
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LeaveRequest", LeaveRequestSchema);
