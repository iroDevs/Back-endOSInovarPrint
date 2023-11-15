const OS = require("../database/models/OS")

async function getAll() {
    return await OS.findAll();
}

async function getById(id) {
    return await OS.findByPk(id);
}

async function create(os) {
    return await OS.create(os);
}

module.exports = {
    getAll,
    getById,
    create
}