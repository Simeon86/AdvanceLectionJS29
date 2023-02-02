window.addEventListener('DOMContentLoaded', () => {
	
});	

// Recursion

Math.pow(2,3) // метод за повдигане на степен
// 2 * 2 * 2

function power(a, b){ // a - основа, b - степен
    // let base = 2;
    let sum = 1;

    for(let i = 0; i < b; i++) {
        sum *= a;  // sum = sum * a
    }
    return sum;
}
const result = power(2,4);
console.log(result);

console.log('//////////////////////////')


// sum += 5 => sum = sum + 5;



function something(a, b) {
    return a + b;
}

console.log(something(5, 6))

console.log('////////////FOR//////////////')

// switch(x) {
//     case 5:
//         something;
//         break;
//     case 6:
//         do something else;
//     default:
// }


for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log('//////////WHILE////////////////')


let a = 0;
while(a < 10) {
    console.log(a);
    a++;
}

console.log('//////////////////////////')

let b = 0;
for(;b< 10;){
    console.log(b);
    b++;
}

console.log('/////////////DO/////////////')

let c = 0;
do {
    console.log(c);
    c++;
} while (c < 10)

console.log('/////////////Exersice/////////////////')

console.log('1/////////////Task///////////Sum//////')

function sum(a, b){
    return a + b;
}
console.log(sum(2,3))

console.log('2/////////////Task/////////////Min in sek////')

const calcMinsToSeconds = function(mins) {
    console.log(mins * 60);
}
calcMinsToSeconds(3)

console.log('3/////////////Task/////////////Years in days////')

const calcYearsToDays = function(years) {
    console.log(years * 365);
}
calcYearsToDays(3)

console.log('4/////////////Task/////////////Number + 1////')

const nextNumber = function(num) {
    return num + 1;
}
console.log(nextNumber(22))

console.log('5/////////////Task///////Residual Division//////////')

const divRemainder = function(a, b){
    return a % b;
}
console.log(divRemainder(5, 2))

console.log('6/////////////Task/////////Fizz Buzz////////')

const fizzBuzz = function(num) {
    for(let i = 0; i <= num; i++){
        if(i % 3 == 0) {
            console.log(i + ' fizz');
        } else if(i % 5 == 0) {
            console.log(i + ' buzz');
        } else if (i % 3 == 0 && i % 5 == 0 ) {
            console.log(i + ' fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(100)

console.log('7/////////////Task/////////Concatenation////////')

const writeText = function(text) {
    return text = text + ' never'
}
console.log(writeText('Hello'))

const writeText1 = function(text) {
    return text + ' never'
}
console.log(writeText1('Hello'))

const writeText2 = function(text) {
    return `${text} never`
}
console.log(writeText2('Hello'))

console.log('7/////////////Task/////Check for empty text////////////')

const emptyString = function(text) {
    if(text.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(emptyString('Hello!!!!'))
console.log(emptyString(''))

if(age >= 18) {
    console.log(true);
} else {
    console.log(false);
}

age >= 18 ? console.log(true) : console.log(false);