var express    = require('express'),
	log4js	   = require('log4js'),
	db         = require('../lib/db')();
	
var router     = express.Router();
var logger	   = log4js.getLogger('index.js');

router.use(function preProcess(req, res, next) {
	logger.debug('요청 URL : ', req.originalUrl);
	logger.debug('요청 METHOD : ', req.method);
	
	if(req.method == 'GET') {
		logger.debug('파라미터  query : ', req.query);
	}
	else {
		logger.debug('파라미터 params: ', req.body);
	}
	
    next();
});

router.get("/", function(req, res) {
	return res.render('test', {deviceNum: req.query.deviceNum});
});

router.post('/certifyUser', function(req, res) {
	console.log(req.body.osVersion);
	//db.getPnuCode('[데이터수집].[dbo].[SEL_온나라수집PNU_고유번호]', req, res);
});

router.post('/regDevice', function(req, res) {
	return res.send("success");
});


module.exports = router;