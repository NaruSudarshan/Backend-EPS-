const mongoose = require("mongoose");

const PayrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    month: String,
    year: Number,
    amount: Number,
    status: { type: String, default: "pending" }, 
});

module.exports = mongoose.model("Payroll", PayrollSchema);
