var express = require('express');
const { URLSearchParams } = require('url');
var router = express.Router();
var request = require('request');
var spotifyIds = require('../public/javascripts/keys')

const data = new URLSearchParams();
data.append("grant_type","client_credentials");

var payload = spotifyIds.clientId + ":" + spotifyIds.clientSecret;
var encodedPayload = new Buffer.from(payload).toString("base64");


router.get('/', (req, res) => {
		request({
			url: "https://accounts.spotify.com/api/token",
			method: "POST",
			headers: {
				'Authorization': "Basic " + encodedPayload,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data.toString(),
		}, function (error, response, data) {
			console.log(data);
			res.send(data);
		});
	})

module.exports = router;
