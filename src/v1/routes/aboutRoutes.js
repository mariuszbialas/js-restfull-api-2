const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const db = require('../database/db.json');

router.get('/', (req, res) => {
    try {
        res.status(200).send(db.about)
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
