// 함수 형식으로 객체의 프로토 생성자를 작성함
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// 객체를 생성하지 않았을때 prototype키워드를 이용해서 객채의 원형을 정의한다.
Person.prototype.walk = function(speed) {
	console.log(this.name + " 님이 " + speed + "km 속도로 걸어갑니다.");
};

// new 키워드로 객체의 생성자를 호출
var person = new Person("사람1", 9909909);
person.walk(100);
