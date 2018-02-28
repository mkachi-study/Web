var express = require("express");
var app = express();
var router = require("./router/main")(app, fs);
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var server = app.listen(3000, function() {
	console.log("Express server has started on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
	session({
		secret: "@#@$MYSIGN#@$#$", // 쿠키를 임의로 변조하는 것을 방지하기 위한 sign 값 (원하는 값을 넣으면 됨)
		resave: false, // 세션을 언제 저장할지 정하는 값.
		// express-session documentation에선 이 값을 false로 권하고 필요에 따라 true
		saveUninitialized: true // Uninitialized세션은 새로 생겼지만 변경되지 않은 세션이다.
		// documentation에선 이 값을 true로 권장함
	})
);
