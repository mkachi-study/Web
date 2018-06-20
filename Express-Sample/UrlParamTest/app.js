let express = require("express");

let app = express();
let port = 3000;

// http://localhost:3000/?test=1&test2=2
app.get("/", function(req, res, next) {
	var render = "";
	let test = req.query.test;
	let test2 = req.query.test2;

	if (test != undefined && test2 != undefined) {
		render += "<p>" + test + "</p>";
		render += "<p>" + test2 + "</p>";
	} else {
		render += "<p>parameters undefined! Check test and test2 parameters!</p>";
	}
	res.send(render);
});

app.listen(port, function() {
	console.log("Server is running at " + port);
});
