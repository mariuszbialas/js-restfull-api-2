const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const db = require('../database/db.json');

const { showAll } = require('../controllers/showAllControllers');
router.get('/', showAll);


// DOWNLOAD
router.get('/download', (req, res) => {
    try {
        res.status(200).send(db.download)
    } catch (err) {
        res.status(500).send(err);
    }
});

// PROJECTS
router.get('/projects', (req, res) => {
    try {
        res.status(200).send(db.projects)
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;