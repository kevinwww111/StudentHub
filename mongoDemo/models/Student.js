const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  account: String,
  seat_number: Number,
  name: String,
  department: String,
  grade: String,
  class: String,
  email: String,
  absences: Number,
});

module.exports = mongoose.model('Student', studentSchema);