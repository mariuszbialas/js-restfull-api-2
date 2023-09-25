const { getAll } = require('../models/showAllModels');

const showAll = (req, res) => {
    try {
        const resp = getAll();
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { showAll };