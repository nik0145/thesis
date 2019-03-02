var express = require('express');
var router = express.Router();
var ctrlNews  = require('../controllers/news');
var ctrlDiscipline  = require('../controllers/discipline');
var ctrlTeacher  = require('../controllers/teacher');
var ctrlSchedule  = require('../controllers/schedule');

router.get('/news', ctrlNews.newsList);
router.get('/news/:id', ctrlNews.newsListOne);
router.post('/news', ctrlNews.newsCreate);
router.put('/news/:id', ctrlNews.newUpdate);
router.delete('/news/:id', ctrlNews.newsDeleteOne);

router.get('/discipline', ctrlDiscipline.disciplineList);
router.post('/discipline', ctrlDiscipline.disciplineCreate);
router.put('/discipline/:id', ctrlDiscipline.disciplineUpdate);
router.delete('/discipline/:name', ctrlDiscipline.disciplineDeleteOne);

router.get('/teacher', ctrlTeacher.teacherList);
router.post('/teacher', ctrlTeacher.teacherCreate);
router.put('/teacher/:id', ctrlTeacher.teacherUpdate);
router.delete('/teacher/:name', ctrlTeacher.teacherDeleteOne);

router.get('/schedule', ctrlSchedule.scheduleList);
router.post('/schedule', ctrlSchedule.scheduleCreate);
router.put('/schedule/:title', ctrlSchedule.scheduleUpdate);
router.delete('/schedule/', ctrlSchedule.scheduleDeleteOne);

module.exports = router;