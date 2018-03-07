var url = require("url");
var curURL = url.parse(
	"https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=Hello"
);

// url 객체를 주소 문자열로 만든다.
var curStr = url.format(curURL);

console.log(curURL);
console.log(curStr);

// url에 있는 hostname정보를 가져온다.
console.log(curURL.hostname);

var queryString = require("querystring");
// 쿼리구문을 분석해서 파라미터 객체로 만들어줌
var param = queryString.parse(curURL.query);
console.log("요청 파라미터 중 query의 값 : %s ", param.query);
// stringify는 파라미터 객체를 문자열로 바꿔줌
console.log("원본 요청 파라미터 : %s", queryString.stringify(param));
