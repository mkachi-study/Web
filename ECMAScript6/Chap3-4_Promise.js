let count = 0;

let success = new Promise(function(resolve) {
	setTimeout(function() {
		resolve("Success");
	}, 1000);
});

let error = new Promise(function(resolve, reject) {
	setTimeout(function() {
		reject("Error");
	}, 1000);
});

// resolve는 값이 then으로 넘어온다.
success.then(function($count) {
	count = $count;
	console.log(count);
});

// reject는 값이 catch로 넘어온다.
error.catch(function(reason) {
	console.log(reason);
});

let p1 = new Promise(function(resolve) {
	setTimeout(function() {
		console.log("p1");
		resolve("P1 resolve");
	}, 1000);
});

let p2 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		console.log("p2");
		reject("P2 resolve");
	}, 2000);
});

let iter = [p1, p2];

Promise.all(iter).then(
	// 2개의 promise의 작업이 완료되었을 때 실행됨
	function(resolve) {
		console.log(resolve);
	},
	// 둘중 하나라도 reject로 값을 넘길 경우 발생함
	// reject이 발생하면 아에 then으로 들어가지 않음
	function(reason) {
		console.log("Catch : " + reason);
	}
);

// race는 iter에 들어있는 Promise중 가장 빨리 처리 되는 것이 출력되게 한다.
// race는 어떤 Promise가 더 빨리 처리되는지를 측정하기 위해 iter에 들어있는 모든 promise를 실행한다.
// race는 이후에 처리된 작업이 reject이더라도 먼저 처리된 작업이 성공했으면 resolve로 값을 전달한다.
Promise.race(iter).then(
	function(resolve) {
		console.log("Race : " + resolve);
	},
	function(reason) {
		console.log("Race Catch : " + reason);
	}
);
