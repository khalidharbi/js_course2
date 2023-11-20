const d = new Date(2020, 9, 17)
//console.log(d.getDay());
//console.log(d.getFullYear());
//console.log(d.getMonth());
//console.log(d.getDate());

const number = Math.ceil(-9.12);
const num = Math.floor(-9.12);
const N = Math.round(9.52);
const n = Math.abs(-9);
//console.log(n);
//console.log(N);
//console.log(num);
//console.log(number);

const numbers = [4, 2, -9, 9, 7];

const snum = Math.min(...numbers);
//console.log(snum);
const mnum = Math.max(...numbers);
//console.log(mnum);

const str = '1.34';
const floatNum = parseFloat(str);
//console.log(floatNum + 1);

const str1 = '9090';
const intNum = parseInt(str1);
//console.log(intNum + 1);

const number3 = Math.trunc(5.67);
//console.log(number3);

const number6 = 3.12;
const isInt = Number.isInteger(number);
//console.log(isInt);

function square(num7){
    if(isNaN(num7))
        return 'Invalid input'
    return num7 * num7

}

console.log(square(3));

const number22 = Math.pow(2, 3);

const a1 = 16;
const sqrtN = Math.sqrt(a1);

const randomN = Math.random() * 10 ;
console.log(randomN)