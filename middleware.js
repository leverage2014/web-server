// User module to export middleware

module.exports = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},

	logger: function(req, res, next){
		console.log(req.method + ' ' + req.originalUrl);
		next();
	}
};