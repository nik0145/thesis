
    var mongoose = require( 'mongoose' );

	module.exports.app = function (req, res) {
	   res.render('layout-spa', { title: 'НРТК Расписание'});
	};
