var url = require("url");
var curURL = url.parse(
	"https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=Hello"
);

var curStr = url.format(curURL);

console.log(curURL);
console.log(curStr);

console.log(curURL.hostname);
