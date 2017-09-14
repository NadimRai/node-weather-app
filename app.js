const request = require("request");

request({
	url: "https://www.google.com.hk/maps/api/geocode/json?address=%20hongkong",
	json: true
}, (error, response, body)=>{
	// console.log(JSON.stringify(response, undefined, 2));
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});