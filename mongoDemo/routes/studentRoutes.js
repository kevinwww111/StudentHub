const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// 讀取所有學生資料
router.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// 新增學生資料
router.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// 更新學生資料
router.put('/students/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedStudent);
});

// 刪除學生資料
router.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: '學生資料已刪除' });
});

module.exports = router;