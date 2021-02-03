'use strict';

console.log(age);
//add let (ES6) 
let globalName = 'global name';
{
    let name = 'sangbin';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var를 사용할 경우
{
    age = 4;
    var age;
}

console.log(age);

// var를 사용할 경우

//변하지 않는 값
const daysInWeek = 7;
const maxNumber  = 5;


const count = 17;
const size  = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//연산을 할 때 정확한 값이 아니게 되면 아래와 같이 나오게 된다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // 양의 무한대
console.log(negativeInfinity); // 음의 무한대
console.log(nAn); // 연산 과정에서 잘못된 입력을 받았을 때 

/*
    bigInt라는 것이 이번 ES6에 추가가 되었다.
    숫자 마지막에 n을 붙혀 주면 type:bigint 라고 나오게 된다. 
*/

const bigInt = 12312344512341451234251234134n; // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string 

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloSangbin = `hi ${brendan}!`;
console.log(`value: ${helloSangbin}, type: ${typeof helloSangbin}`); // ``를 사용하면 아래와 같이 불필요하게 ''을 사용하여 추가해 줄 필요가 없다.
console.log('value: ' + helloSangbin + 'type: ' + typeof helloSangbin); // ''를 사용하게 되면 복잡한 코드를 보여주게 된다.

//boolean
const canRead = true; 
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`)

//null
//아무것도 없는 값으로 할당이 되어 있다고 명시.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


//undefined
//선언은 되었지만 값이있는지 없는지를 말함
let x;
console.log(`value : ${x}, type: ${typeof x}`);

//simbol 
//서로 다른 값을 가진다. 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//for을 해주면 같은 값으로 나온다. 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
// const 변경이 안되지만 sangbin object 안에 age를 가르켜서 변경은 가능하다. 
const sangbin = { name:'sangbin', age: 20 };
sangbin.age = 21;

// Dynamic typing  
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, tyep: ${typeof text}`);
text = 1;
console.log(`value: ${text}, tyep: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, tyep: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, tyep: ${typeof text}`);

// 오류가 난다.
// h e l l o -> 0 1 2 3 4 순으로 읽기 때문에 위에서 '8'/'2'를 하면 오류가 난다.
// console.log(text.charAt(0));
