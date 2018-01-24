var config = require('./config.global');

config.log = {
	appenders: {mhotplace25: {type:'console'}},
	categories: {default: {appenders: ['mhotplace25'], level: 'debug'}}
};
module.exports = config;