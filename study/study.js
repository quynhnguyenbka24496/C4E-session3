//Bài 1. Variable swap
// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
//VD1
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // => 2
console.log(b); // => 1
//VD2 : GÁN 1 BIẾN TEMP
let c= 1;
let d = 2;
let temp;

temp = c;
c = d;
d= temp;

console.log(c); // => 2
console.log(d); // => 1

//Bài 2:
// Split String into Array
// Using type conversion from String to Array
const s = 'quynh ngu ngoc';
const s1 = Array(s);
console.log(s1); // Result: [“quynh ngu ngoc”]
const s2=s.split(' ');
console.log(s2);
// Bài 3
const s3=[1,2,3,4]
console.log(...s3);
// Bài 4 : làm ở lớp rồi
