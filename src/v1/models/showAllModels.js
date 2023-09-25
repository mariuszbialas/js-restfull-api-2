const db = require('../database/db.json');

function getAll() {
    try {
        return db;
    } catch (err) {
        console.error('getAllItems error', err);
    }
}


module.exports = { getAll };