let mongoose = require('mongoose');

let EmployeeSchema = mongoose.Schema({
  _id: {
      type: Number,
      required: [true, "Id is required"]
  },
  firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
  },
  lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
  },
  emailId: {
      type: String,
      required: [true, "Email Id is required"],
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Must be a valid email"]
  },
});

let Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;