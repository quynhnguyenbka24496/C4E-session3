// Write a script to ask users enter a sequence of numbers, the Numbers are separated by
// commas, calculate the sum of the numbers and show it to users
let ip= prompt('Enter the consequence of Number, separated by commas (,)');
let inputN = [];
inputN= ip.split(",");
console.log(inputN)
let sum=0;
for (let i =0;i< inputN.length;i++){
    sum+=Number(inputN[i]);
}
alert(`The sum of them ${sum}`);
