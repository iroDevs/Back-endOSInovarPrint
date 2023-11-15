const OS = require("../services/os")

async function getAll(req, res) {
    const response = await OS.getAll();
    res.status(response.status).json(response.data);
}

async function getById(req, res) {
    const response = await OS.getById(req.params.id);
    res.status(response.status).json(response.data);
}

async function create(req, res) {
    const response = await OS.create(req.body);
    res.status(response.status).json(response.data);
}

module.exports = {
    getAll,
    getById,
    create
}