"use strict";

// Deps
var activity = require("./activity");

console.log('keith ng');

/*
 * GET home page.
 */
exports.index = function(req, res) {
	console.log('keith ng 2');
	if (!req || !req.hasOwnProperty("session") || !req.session.hasOwnProperty("token")) {
		console.log('keith ng 3');
		res.render("index.html", {
			title: "Unauthenticated",
			errorMessage: "This app may only be loaded via Salesforce Marketing Cloud"
		});
	} else {
		console.log('keith ng 4');
		res.render("index.html", {
			title: "Journey Builder Activity",
			results: activity.logExecuteData
		});
	}
};

exports.login = function(req, res) {
	console.log("req.body: ", req.body);
	res.redirect("/");
};

exports.logout = function(req, res) {
	req.session.token = "";
};
