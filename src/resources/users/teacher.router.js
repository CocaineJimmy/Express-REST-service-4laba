// teacher.router.js
const express = require('express');
const Teacher = require('./teacher.model');
const teacherService = require('./teacher.service');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const teachers = await teacherService.getAll();
    res.json(teachers.map(Teacher.toResponse));
  } catch (err) {
    next(err);
  }
});

router.get('/:teacherId', async (req, res, next) => {
  try {
    const teacher = await teacherService.getById(req.params.teacherId);
    if (!teacher) return res.status(404).json({ message: 'Not found' });
    res.json(Teacher.toResponse(teacher));
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTeacher = await teacherService.create(req.body);
    res.status(201).json(Teacher.toResponse(newTeacher));
  } catch (err) {
    next(err);
  }
});

router.put('/:teacherId', async (req, res, next) => {
  try {
    const updated = await teacherService.update(req.params.teacherId, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(Teacher.toResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.delete('/:teacherId', async (req, res, next) => {
  try {
    const removed = await teacherService.remove(req.params.teacherId);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
