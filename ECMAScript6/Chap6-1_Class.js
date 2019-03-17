// function prototype
var DefineClass1 = function() {};
DefineClass1.prototype.setValue = function(value) {
	this.value = value;
};

DefineClass1.prototype.getValue = function() {
	return this.value;
};

// ES6 prototype
class DefineClass2 {
	constructor() {
		this.value = undefined;
	}

	setValue(value) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}
}

let obj1 = new DefineClass1();
obj1.setValue(100);
console.log(obj1.getValue());

let obj2 = new DefineClass2();
obj2.setValue(200);
console.log(obj2.getValue());

// static method
var DefineClass3 = function() {};
DefineClass3.StaticMethod = function() {
	console.log("DefineClass3 static method");
};

class DefineClass4 {
	static StaticMethod() {
		console.log("DefineClass4 static method");
	}
}

DefineClass3.StaticMethod();
DefineClass4.StaticMethod();

// Extends
var DefineClass5 = function() {};
DefineClass5.prototype.print = function() {
	console.log("DefineClass5 Extends");
};
var ChildClass1 = function() {};
ChildClass1.prototype = new DefineClass5();

var obj3 = new ChildClass1();
obj3.print();

class DefineClass6 {
	print() {
		console.log("DefineClass6 Extends");
	}
}

class ChildClass2 extends DefineClass6 {}
var obj4 = new ChildClass2();
obj4.print();

// overriding
class Base {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	printPosition() {
		console.log(this.x, this.y);
	}
}

class Child extends Base {
	constructor(x, y, width, height) {
		super(x, y);
		this.width = width;
		this.height = height;
	}

	printPosition() {
		// overriding
		super.printPosition(); // parent printPosition
		console.log(this.x, this.y, this.width, this.height);
	}
}

const child = new Child(10, 10, 20, 20);
child.printPosition();
