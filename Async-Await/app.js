function print1() {
	return new Promise(function() {
		setTimeout(function() {
			console.log("1");
		}, 1000);
	});
}

function print2() {
	console.log("2");
}

function print3() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(3);
		}, 1000);
	});
}

async function main() {
	await print1();
	let num = await print3();
	console.log(num);
}

main();
