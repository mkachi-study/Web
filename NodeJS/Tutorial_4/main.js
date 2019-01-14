function add(a, b, callback) {
	var result = a + b;
	callback(result);

	var count = 0;
	var history = function() {
		++count;
		console.log(count + " 번 실행했습니다.");
		return a + " + " + b + " = " + result;
	};
	return history;
}

var history = add(10, 10, function(result) {
	console.log("10 + 10의 결과 : %d", result);
});
console.log(history());
console.log(history());
console.log(history());

var history2 = add(10, 10, function(result) {
	console.log("10 + 10의 결과 : %d", result);
});
console.log(history2());
console.log(history2());
console.log(history2());
