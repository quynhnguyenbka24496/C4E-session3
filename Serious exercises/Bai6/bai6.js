// Write a script asking users to enter a sequence of numbers, the numbers are separated
// by commas, find the smallest number and log it out to users
let q1= prompt('Enter the consequence of number, separated by (,)');
let q2 = [];
q2 = q1.split(",");
let min = Math.min(...q2)
alert(`The smallest number is ${min}`);