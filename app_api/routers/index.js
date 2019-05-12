var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
   secret: 'kek',
   _userProperty: 'payload'
});

var ctrlNews  = require('../controllers/news');
var ctrlDiscipline  = require('../controllers/discipline');
var ctrlTeacher  = require('../controllers/teacher');
var ctrlSchedule  = require('../controllers/schedule');
var ctrlAuth = require('../controllers/authentication');


router.get('/news', ctrlNews.newsList);
router.get('/news/:id', ctrlNews.newsListOne);
router.post('/news', ctrlNews.newsCreate);
router.put('/news/:id', ctrlNews.newUpdate);
router.delete('/news/:id', ctrlNews.newsDeleteOne);

router.get('/discipline', ctrlDiscipline.disciplineList1C);
//router.get('/discipline', ctrlDiscipline.disciplineList);
router.post('/discipline',auth, ctrlDiscipline.disciplineCreate);
router.put('/discipline/:id', ctrlDiscipline.disciplineUpdate);
router.delete('/discipline/:name',auth, ctrlDiscipline.disciplineDeleteOne);

router.get('/teacher', ctrlTeacher.teacherList);
router.post('/teacher',auth, ctrlTeacher.teacherCreate);
router.put('/teacher/:id', ctrlTeacher.teacherUpdate);
router.delete('/teacher/:name',auth, ctrlTeacher.teacherDeleteOne);

router.get('/subject', ctrlSchedule.subjectList);
router.get('/schedule', ctrlSchedule.scheduleList);
router.post('/schedule', ctrlSchedule.scheduleCreate);
router.put('/schedule/:title',auth, ctrlSchedule.scheduleUpdate);
router.delete('/schedule/', ctrlSchedule.scheduleDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.delete('/login', ctrlAuth.loginDelete);

module.exports = router;