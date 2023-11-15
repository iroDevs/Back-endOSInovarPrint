const OS = require("../repository/os")

async function getAll() {
    try {
        const response = await OS.getAll();
        return {status: 200, data: response}
    } catch (error) {
        console.log('error: ', error);
        return {status: 500, data: error}      
    }
}

async function getById(id) {
    try {
        const response = await OS.getById(id);
        return {status: 200, data: response}
    } catch (error) {
        console.log('error: ', error);
        return {status: 500, data: error}      
    }
}

async function create(os) {
    try {
        const response = await OS.create(os);
        return {status: 200, data: response}
    } catch (error) {
        console.log('error: ', error);
        return {status: 500, data: error}      
    }
}

module.exports = {
    getAll,
    getById,
    create
}