var express = require('express');
var router = express.Router();
var ctrlNews  = require('../controllers/news');
var ctrldiscipline  = require('../controllers/discipline');

router.get('/news', ctrlNews.newsList);
router.get('/news/:id', ctrlNews.newsListOne);
router.post('/news', ctrlNews.newsCreate);
router.put('/news/:id', ctrlNews.newUpdate);
router.delete('/news/:id', ctrlNews.newsDeleteOne);

router.get('/discipline', ctrldiscipline.disciplineList);
router.post('/discipline', ctrldiscipline.disciplineCreate);
router.put('/discipline/:id', ctrldiscipline.disciplineUpdate);
router.delete('/discipline/:id', ctrldiscipline.disciplineDeleteOne);

module.exports = router;