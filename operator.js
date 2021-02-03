// TODO 1.String concatenation

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// TODO 2.Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); // TODO exponentiation

// TODO 3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// TODO 먼저 할당된 값에 1을 더함
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// TODO 4.Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// TODO 5.Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// TODO 6. Logical operator: || (or), &&(and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or) 은 처음 나오는 값이 true면 멈추게 된다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and) 모든 조건이 true 일 때
console.log(`or: ${value1 && value2 && check()}`);


function check(){

    for(let i = 0; i < 10; i++){
        console.log('test');
    }
    return true;
}

console.log(!value1);
// true


//TODO 7.Equality
const stringFive = '5';
const numberFive = 5;

// ==
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== type 까지 같아야 한다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


const sang1 = {name : "bin"};
const sang2 = {name : "bin"};
const sang3 = sang2;

console.log(sang1 == sang2); // false
console.log(sang1 === sang2); // false
console.log(sang1 === sang3); // true



// 0, '', null <- false로 간주함
console.log(0 == false); //true false는 0으로 간주하기 때문
console.log(0 === false); // 0과 false는 타입이 다르기 때문에 flase
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

//TODO if, else if, else
const name = 'df'; // TODO name에 할당된 값에 따라 if의 조건식을 만들어 줄 수 있다.
if (name === 'sang'){
    console.log('Welcome, sangbin');
} else if (name === 'coder'){
    console.log('Hello sangbin')
} else {
    console.log('unkwnon');
}

//TODO Ternary operator: ?
//TODO condition ? value : value2;
//TODO name이 sang이 맞으면 ? 뒤에 yes를 실행 그렇지 않으면 no를 실행해라!!
console.log(name === 'sang' ? 'yes' : 'no');

//TODO Switch
const browser = 'IE';
switch (browser){
    case "IE":
        console.log('go away');
        break;
    case "Chrome":
    case "Firefox":
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//TODO While
let i = 3;
while (i > 0 ){
    console.log(`while: ${i}`);
    i--;
}

//TODO Do While
//TODO 먼저 do블록에서 실행을 하고 그 다음 while문을 실행함
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//TODO for
for(i = 3; i > 3; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i -2){
    console.log(`inline variable for: ${i}`);
}