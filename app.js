const request = require("request");

request({
	url: "https://www.google.com.hk/maps/api/geocode/json?address=%20hongkong",
	json: true
}, (error, response, body)=>{
	console.log(body);
});