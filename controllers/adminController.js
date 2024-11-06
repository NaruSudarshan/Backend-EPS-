const Employee = require("../models/Employee");
const LeaveRequest = require("../models/LeaveRequest");
const Payroll = require("../models/Payroll");

exports.approveLeave = async (req, res) => {
    const leaveRequest = await LeaveRequest.findById(req.params.id);
    if (!leaveRequest) {
        return res.status(404).json({ message: "Leave request not found" });
    }

    leaveRequest.status = "approved";
    await leaveRequest.save();
    res.json({ message: "Leave approved" });
};

exports.generatePayroll = async (req, res) => {
    const employees = await Employee.find();

    for (let employee of employees) {
        const payroll = new Payroll({
            employeeId: employee._id,
            month: "November",
            year: 2024,
            amount: employee.salary,
        });
        await payroll.save();
    }

    res.json({ message: "Payroll generated for all employees" });
};
