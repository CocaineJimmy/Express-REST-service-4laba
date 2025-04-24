import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();
// resources/users/user.service.js

const userRepo = require('./user.memory.repository');

const getAll = async () => await userRepo.getAll();

const getById = async (id) => await userRepo.getById(id);

const create = async (data) => await userRepo.create(data);

const update = async (id, data) => await userRepo.update(id, data);

const remove = async (id) => await userRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };


export { getAll };
