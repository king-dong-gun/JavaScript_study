console.log("Hello JavaScript2.js");
console.log("Hi JavaScript3.js");

/* 변수 */
// 1. 변수선언 (3개의 키워드)
// 2. var, let, const: ES6
// let -> 지역변수, 재선언, 호이스팅시 초기화가 되지 않음 <-> var
// const -> 상수
// let name = 'adam';
// console.log(name); // adam 출력
//
// console.log(age); // undefined'를 출력 -> 호이스팅으로 인해
// age = 5;
// var age; // age 사용 후 선언
//
// name = 4; // name 변수에 다시 값을 할당 ->  let은 재할당을 허용
// let name; // 오류: 같은 범위에서 let으로 변수를 다시 선언할 수 없음

/*
var age;
console.log(age);
age = 5;

name = 4;
let name;
*/
// 전역변수 -> 키워드 없이 사용하면 전역변수

n = 10;
console.log(n);

let n1 = 100;
console.log(n1);
{
    let name = 'scott'; // 지역변수
    console.log(name);
    name = 'adam';
    console.log(name);
    console.log(n);            // 전역변수
}
// console.log(name); -> 지역변수 사용안됨

/* 변수 호이스팅 */
var a;
console.log("a의 값은 " + a);
console.log("b의 값은 " + b);
var b;

// console.log("c의 값은 " + c);
// let c;
let d;
console.log("d의 값은 " + d);

console.log(x === undefined);
var x = 3;

var myvar = "my value";
console.log(myvar);
(
    function () {
        console.log(myvar);    // undefined
        console.log(100);
        var myvar = "local value";
        var m1 = "local";
    }
)();
console.log(myvar);
// console.log(m1);
/* 함수 호이스팅 */
sayHello();
function sayHello() {
    console.log('Hello');
}

let name = "scott";
console.log(name);
name = 1200;
console.log(name);
name = "kim";
const message = "My name is " + name;
const message2 = 'My name is ${name}'; // undefined
const message3 = `My name is ${name}`; // ``(백택) 사용
console.log(message);
console.log(message2);
console.log(message3);

// number, string, boolean, null, undefined, symbol(ES6), obj
console.log(typeof (100));  // 타입확인

let pi = 3.14;
console.log(typeof (pi));   // number: -2^53 ~ 2^53;

let nothing = null;
console.log(typeof `value: ${nothing}, type: ${typeof nothing}`);
let x1;
console.log(`value: ${x1}, type: ${typeof x1}`);

const infinity = 1/0;
console.log(infinity);  // 특별한 자료형
console.log(typeof (infinity)); // 타입은 number

const char = "a";
const smith = "smith";
const greeting = "Hello" + smith;
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${smith}, type: ${typeof smith}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const msg = 18 + "old";
console.log(msg);
const i = "나는 ";
const age = 30;
console.log(i + age + "살 입니다.");

/* boolean */
// false: 0, null, undefined, NaN
// true: any other value

/* symbol -> 변경이 불가능한 원시 값 */
const str1 = "strId";
const str2 = "strId";
console.log(str1 === str2);
const symbol1 = Symbol("id");   // 입력 문자열로 키 생성
const symbol2 = Symbol("id");
console.log(symbol1);
console.log(symbol2);
console.log(typeof (symbol1));
console.log(symbol1 === symbol2);
// const symbol3 = symbol.for("id");
// const symbol4 = symbol.for("id");
// console.log(symbol3);
// console.log(symbol4 === symbol3);

let str = "javascript";
let len = str.length;
console.log(len);

let text = "Hello";
console.log(text.charAt(0));    //  0번째 인덱스 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "10" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 문자 + 숫자는 문자열로 바뀜

let number = 10;
console.log(`value: ${number}, type: ${typeof number}`);

console.log(typeof null); // "object"

