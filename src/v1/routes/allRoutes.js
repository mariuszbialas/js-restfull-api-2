const express = require('express');

const router = express.Router();

const { showAll } = require('../controllers/showAllControllers');

router.get('/all', showAll);

router.get('/', (req, res) => res.send({
    'info': 'Api für "Über mich" Internetseite',
    'alles': '/v1/all',
    'über mich': '/v1/about',
    'kentnissen': 'v1/knowledge',
    'ausbildung': 'v1/education',
    'erfahrung': 'v1/expierience',
    'blog': 'v1/blog',
    'download': 'v1/download',
    'projekte': 'v1/projects',

}));

module.exports = router;