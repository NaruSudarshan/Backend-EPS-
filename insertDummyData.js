const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Employee = require('./models/Employee');


dotenv.config();


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const dummyEmployees = [
  { name: 'Amit Kumar', email: 'amit.kumar@example.com', role: 'employee', salary: 30000 },
  { name: 'Priya Verma', email: 'priya.verma@example.com', role: 'employee', salary: 25000 },
  { name: 'Ravi Sharma', email: 'ravi.sharma@example.com', role: 'employee', salary: 35000 },
  { name: 'Neha Patel', email: 'neha.patel@example.com', role: 'employee', salary: 28000 },
  { name: 'Vikas Yadav', email: 'vikas.yadav@example.com', role: 'employee', salary: 32000 },
];

async function insertDummyData() {
  try {
    for (let employee of dummyEmployees) {
      
      const hashedPassword = await bcrypt.hash('password', 10);  
      const newEmployee = new Employee({
        name: employee.name,
        email: employee.email,
        password: hashedPassword,
        role: employee.role,
        salary: employee.salary
      });
      await newEmployee.save();
      console.log(`Employee ${employee.name} added successfully!`);
    }

    mongoose.connection.close();
    console.log('All dummy data inserted');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertDummyData();
