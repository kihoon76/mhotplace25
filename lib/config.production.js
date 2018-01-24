var config = require('./config.global');

config.log = {
	appenders: {mhotplace25: {
		type:'dateFile',
		filename: '/home/khnam/apis/onnara/logs/onnara.log',
		pattern: '-yyyy-MM-dd',
		alwaysIncludePattern: true
	}},
	categories: {default: {appenders: ['mhotplace25'], level: 'debug'}}
};
module.exports = config;