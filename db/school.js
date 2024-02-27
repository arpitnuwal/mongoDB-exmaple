const mongoose = require("mongoose");

const school = new mongoose.Schema({
  _id: String,
  name: String,
  class: Number,
});

const student = new mongoose.Schema({
  name: String,
  class: {
    name: Number,
    subject: String,
  },
});

const School = mongoose.model("School", school);
const Student = mongoose.model("Student", student);

module.exports = {School, Student};

// module.exports = {
//   School :  mongoose.model("School", school),
//   Student : mongoose.model("Student", student),
// }
