// exam.router.js
const express = require('express');
const Exam = require('./exam.model');
const examService = require('./exam.service');

const router = express.Router();

// GET /exams – вернуть все экзамены
router.get('/', async (req, res, next) => {
  try {
    const exams = await examService.getAll();
    res.json(exams.map(Exam.toResponse));
  } catch (err) {
    next(err);
  }
});

// GET /exams/:examId – вернуть экзамен по id
router.get('/:examId', async (req, res, next) => {
  try {
    const exam = await examService.getById(req.params.examId);
    if (!exam) return res.status(404).json({ message: 'Not found' });
    res.json(Exam.toResponse(exam));
  } catch (err) {
    next(err);
  }
});

// GET /exams/:examId/teachers – вернуть преподавателя(ей) экзамена
// (Для простоты, если в экзамене указан teacherId, возвращаем его в виде массива)
router.get('/:examId/teachers', async (req, res, next) => {
  try {
    const exam = await examService.getById(req.params.examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    if (exam.teacherId) {
      res.json([{ teacherId: exam.teacherId }]);
    } else {
      res.json([]);
    }
  } catch (err) {
    next(err);
  }
});

// POST /exams – создать экзамен
router.post('/', async (req, res, next) => {
  try {
    const newExam = await examService.create(req.body);
    res.status(201).json(Exam.toResponse(newExam));
  } catch (err) {
    next(err);
  }
});

// PUT /exams/:examId – обновить экзамен
router.put('/:examId', async (req, res, next) => {
  try {
    const updated = await examService.update(req.params.examId, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(Exam.toResponse(updated));
  } catch (err) {
    next(err);
  }
});

// DELETE /exams/:examId – удалить экзамен
router.delete('/:examId', async (req, res, next) => {
  try {
    const removed = await examService.remove(req.params.examId);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
