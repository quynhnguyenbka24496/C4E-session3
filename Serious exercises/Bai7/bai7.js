// Create an array containing at least 5 numbers, then ask users enter a number, perform a
// search to look for the number in the array, if the number is found, tell user that with the
// index of it in the array, if not, also tell them so
  
const q1 = [3,4,6,-9,10,-88,2];
let q2=Number(prompt('Enter a number?'));
let q3=q1.indexOf(q2);
if(q3<0){
    alert(`${q2} is NOT found in my array`);
}
else{
    alert(`${q2} is found in my array at index ${q3}`)
}

