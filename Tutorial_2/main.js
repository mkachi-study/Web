var http = require("http");
var express = require("express");

express.http
	.createServer(function(request, response) {
		/*
            writeHead에서 200은 HTTP의 상태 코드이다.
            HTTP 상태 코드들
            https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C

            컨텐츠 타입들
            http://www.iana.org/assignments/media-types/media-types.xhtml
        */
		response.writeHead(200, {
			"Content-Type": "text/html"
		});

		response.end("<a href='https://www.naver.com/'>Hello World</a>");
	})
	.listen(8081);
console.log("Server running at http://localhost:8081");
