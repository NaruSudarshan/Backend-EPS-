const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "employee" },
    salary: Number,
    leaveBalance: { type: Number, default: 12 },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
