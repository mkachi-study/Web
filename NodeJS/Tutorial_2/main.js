// 단순히 함수를 등록한 모듈
var module1 = require("./module1");
module1.print();

// js파일 자체가 객체가 된 모듈
var module2 = require("./module2");
module2.print();
/*
var os = require("os");
console.log("시스템의 hostname : %s", os.hostname());
console.log("시스템의 메모리 %d / %d", os.freemem(), os.totalmem());
console.log("시스템의 CPU 정보");
console.log(os.cpus());
console.log("시스템의 네트워크 인터페이스 정보");
console.log(os.networkInterfaces());
*/

var path = require("path");
var directories = ["users", "kachi", "docs"];

// 배열 객체에 join을 사용하면 디렉터리 이름이나 파일 이름으로 만들 수 있다.
// path.sep은 파일의 경로를 나누는 /나 \를 os별로 구분해서 정해주는 고정 변수인듯
var docsDirectory = directories.join(path.sep);
console.log(docsDirectory);

var curPath = path.join("/Users/kachi", "notepad.exe");
console.log("파일 패스 : %s", curPath);

var filename = "C:\\Users\\kachi\\notepad.exe";
// 디렉터리만 잘라줌
var dirname = path.dirname(filename);
// 파일이름만 잘라줌
var basename = path.basename(filename);
// 파일 확장자만 잘라줌
var extname = path.extname(filename);
console.log("%s %s %s", dirname, basename, extname);
