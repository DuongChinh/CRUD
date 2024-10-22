const express = require('express');
const router = express.Router();
const StudentModel = require('./models/studentschema');

// Lấy tất cả sinh viên
router.get('/findall', async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error finding data");
    }
});

// Thêm sinh viên mới
router.post('/save', async (req, res) => {
    try {
        const existingStudent = await StudentModel.findOne({ StudentId: req.body.StudentId });
        if (existingStudent) {
            return res.status(400).send("Student with this ID already exists");
        }

        const newStudent = new StudentModel(req.body);
        const savedStudent = await newStudent.save();
        res.send("Data inserted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving data");
    }
});

// Cập nhật thông tin sinh viên
router.post('/update', async (req, res) => {
    try {
        const updatedStudent = await StudentModel.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (updatedStudent) {
            res.json(updatedStudent);
            console.log("Data updated!");
        } else {
            res.status(404).send("Student not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating data");
    }
});

// Xóa sinh viên
router.post('/delete', async (req, res) => {
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(req.body.id);
        if (deletedStudent) {
            res.json(deletedStudent);
            console.log("Data Deleted!");
        } else {
            res.status(404).send("Student not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting data");
    }
});

module.exports = router;
