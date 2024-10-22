const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    StudentId: { type: Number, unique: true, required: true },
    Name: { type: String, required: true },
    Roll: { type: Number, required: true },
    Birthday: { type: Date, required: true },
    Address: { type: String, required: true }
});

module.exports = mongoose.model('Student', StudentSchema);
