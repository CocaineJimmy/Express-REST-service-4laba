// exam.service.js
const examRepo = require('./exam.memory.repository');

async function getAll() {
  return await examRepo.getAll();
}

async function getById(id) {
  return await examRepo.getById(id);
}

async function create(data) {
  return await examRepo.create(data);
}

async function update(id, data) {
  return await examRepo.update(id, data);
}

async function remove(id) {
  return await examRepo.remove(id);
}

async function getExamsByAbiturient(abiturientId) {
  return await examRepo.getByAbiturientId(abiturientId);
}

/**
 * Обработка удаления абитуриента:
 * Для каждого экзамена с данным abiturientId:
 * – Если teacherId равен null, экзамен удаляется.
 * – Иначе поле abiturientId обновляется на null.
 */
async function handleAbiturientDeletion(abiturientId) {
  const exams = await examRepo.getByAbiturientId(abiturientId);
  for (const exam of exams) {
    if (exam.teacherId === null) {
      await examRepo.remove(exam.id);
    } else {
      await examRepo.update(exam.id, { abiturientId: null });
    }
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getExamsByAbiturient,
  handleAbiturientDeletion
};
