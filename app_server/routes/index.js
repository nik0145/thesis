var express = require('express');
var router = express.Router();

var ctrlAdmin = require('../controllers/admin');

/* GET home page. */
//router.get('/', function(req, res, next) {
	router.get('/',ctrlAdmin.app);

module.exports = router;
