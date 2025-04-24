import * as usersRepo from './user.memory.repository.js';

// abiturient.service.js
const abiturientRepo = require('./abiturient.memory.repository');
const examService = require('./exam.service');

// CRUD‑операции для абитуриентов
async function getAll() {
  return await abiturientRepo.getAll();
}

async function getById(id) {
  return await abiturientRepo.getById(id);
}

async function create(data) {
  return await abiturientRepo.create(data);
}

async function update(id, data) {
  return await abiturientRepo.update(id, data);
}

/**
 * При удалении абитуриента:
 * 1. Удаляется запись абитуриента.
 * 2. Вызывается обработка экзаменов:
 *    - Если у экзамена teacherId === null, запись экзамена удаляется.
 *    - Иначе abiturientId устанавливается в null.
 */
async function remove(id) {
  const removed = await abiturientRepo.remove(id);
  if (removed) {
    await examService.handleAbiturientDeletion(id);
  }
  return removed;
}

module.exports = { getAll, getById, create, update, remove };


export { getAll };
