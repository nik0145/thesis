var express = require('express');
var router = express.Router();
var ctrlNews  = require('../controllers/news');

router.get('/news', ctrlNews.newsList);
router.get('/news/:id', ctrlNews.newsListOne);
router.post('/news', ctrlNews.newsCreate);
router.put('/news/:id', ctrlNews.newUpdate);
router.delete('/news/:id', ctrlNews.newsDeleteOne);

module.exports = router;