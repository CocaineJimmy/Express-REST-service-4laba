const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
// resources/users/user.memory.repository.js

let users = [];
let nextId = 1;

const getAll = async () => users;

const getById = async (id) => users.find(u => u.id === id);

const create = async (data) => {
  const newUser = { id: String(nextId++), ...data };
  users.push(newUser);
  return newUser;
};

const update = async (id, data) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

const remove = async (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  const removedUser = users.splice(index, 1)[0];
  return removedUser;
};

module.exports = { getAll, getById, create, update, remove };

  [];

export { getAll };
