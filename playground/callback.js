var getUser = (id, callback) =>{
	var user = {
		id,
		name: "Jon"
	};
	callback(user);
};

getUser(31, (userObject) =>{
	console.log(userObject);
})