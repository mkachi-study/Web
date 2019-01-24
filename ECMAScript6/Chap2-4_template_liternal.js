var str1 = "으아악\n아아아악\n끄에에엑";
console.log(str1);

var str2 = "히이익";
str2 += "으이이익";
str2 += "아이익";
console.log(str2);

var str3 = `끄어어억
갸아아아악
끄아아아악
히에에엒`;
console.log(str3);

let a = 100;
let b = 200;
var str4 = "a + b = " + (a + b) + " 입니다.";
console.log(str4);

var str5 = `a + b = ${a + b}입니다.`;
console.log(str5);

function test(str, a, b) {
    let bigger;
    (a > b) ? bigger = "A" : bigger = "B";
    return str[0] + bigger + "가 더 큽니다.";
}

let str6 = test`A와 B 둘 중 ${a}, ${b}`;
console.log(str6);