var mongoose = require('mongoose');

var Questions = new mongoose.Schema({
	question: {
		type: String,
		required: true
	},
	answer: {
		type: String,
		required: true
	}

	})

module.exports = mongoose.model('Questions', Questions);