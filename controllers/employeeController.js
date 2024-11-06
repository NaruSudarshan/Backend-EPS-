const Payroll = require("../models/Payroll");
const LeaveRequest = require("../models/LeaveRequest");
const Employee = require("../models/Employee");

exports.viewPayroll = async (req, res) => {
    const payroll = await Payroll.find({ employeeId: req.user.id });
    res.json(payroll);
};

exports.requestLeave = async (req, res) => {
    const leaveRequest = new LeaveRequest({ 
        ...req.body, 
        employeeId: req.user.id 
    });

   
    const employee = await Employee.findById(req.user.id);
    if (employee.leaveBalance <= 0) {
        return res.status(400).json({ message: "No leave balance left" });
    }

    employee.leaveBalance -= 1; 
    await employee.save();
    
    await leaveRequest.save();
    res.json({ message: "Leave request submitted successfully" });
};
