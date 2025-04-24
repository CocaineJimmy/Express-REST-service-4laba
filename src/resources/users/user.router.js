import { Router } from 'express';

import User from './user.model.js';
import * as usersService from './user.service.js';

// abiturient.router.js
const express = require('express');
const Abiturient = require('./abiturient.model');
const abiturientService = require('./abiturient.service');
const examService = require('./exam.service');

const router = express.Router();

// GET /abiturients – вернуть всех абитуриентов
router.get('/', async (req, res, next) => {
  try {
    const list = await abiturientService.getAll();
    res.json(list.map(Abiturient.toResponse));
  } catch (err) {
    next(err);
  }
});

// GET /abiturients/:abiturientId – вернуть абитуриента по id
router.get('/:abiturientId', async (req, res, next) => {
  try {
    const abiturient = await abiturientService.getById(req.params.abiturientId);
    if (!abiturient) return res.status(404).json({ message: 'Not found' });
    res.json(Abiturient.toResponse(abiturient));
  } catch (err) {
    next(err);
  }
});

// GET /abiturients/:abiturientId/exams – вернуть экзамены, связанные с абитуриентом
router.get('/:abiturientId/exams', async (req, res, next) => {
  try {
    const exams = await examService.getExamsByAbiturient(req.params.abiturientId);
    res.json(exams);
  } catch (err) {
    next(err);
  }
});

// POST /abiturients – создать абитуриента
router.post('/', async (req, res, next) => {
  try {
    const newAbiturient = await abiturientService.create(req.body);
    res.status(201).json(Abiturient.toResponse(newAbiturient));
  } catch (err) {
    next(err);
  }
});

// PUT /abiturients/:abiturientId – обновить данные абитуриента
router.put('/:abiturientId', async (req, res, next) => {
  try {
    const updated = await abiturientService.update(req.params.abiturientId, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(Abiturient.toResponse(updated));
  } catch (err) {
    next(err);
  }
});

// DELETE /abiturients/:abiturientId – удалить абитуриента (с обновлением экзаменов)
router.delete('/:abiturientId', async (req, res, next) => {
  try {
    const removed = await abiturientService.remove(req.params.abiturientId);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

