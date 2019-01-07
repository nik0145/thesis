var express = require('express');
var router = express.Router();
var ctrlNews  = require('../controllers/news');

router.get('/news', ctrlNews.newsList);
router.get('/news/:id', ctrlNews.newList);
router.post('/news', ctrlNews.newsCreate);
//router.put('/news/:id', ctrlNews.update);
//router.delete('/news/:id', ctrlNews.delete);

module.exports = router;