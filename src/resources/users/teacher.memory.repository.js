// teacher.memory.repository.js
let teachers = [];
let nextId = 1;

function getAll() {
  return Promise.resolve(teachers);
}

function getById(id) {
  return Promise.resolve(teachers.find(t => t.id === id));
}

function create(data) {
  const teacher = { ...data, id: String(nextId++) };
  teachers.push(teacher);
  return Promise.resolve(teacher);
}

function update(id, data) {
  const index = teachers.findIndex(t => t.id === id);
  if (index === -1) return Promise.resolve(null);
  teachers[index] = { ...teachers[index], ...data };
  return Promise.resolve(teachers[index]);
}

function remove(id) {
  const index = teachers.findIndex(t => t.id === id);
  if (index === -1) return Promise.resolve(null);
  const removed = teachers.splice(index, 1)[0];
  return Promise.resolve(removed);
}

module.exports = { getAll, getById, create, update, remove };
