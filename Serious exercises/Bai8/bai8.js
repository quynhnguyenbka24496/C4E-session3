//8.1 : Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
let myS = [5,7,300,90,24,50,75];
console.log(`Hello,my name Quynh and here is my sheet sizes: ${myS}`)
//8.2 At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
let max=Math.max(...myS);
console.log(`My biggest sheep has size ${max}, let's shave it`);
// //8.3 : When your biggest sheer, its size will return to the default size, which is 8.
// Hint: Google ‘JS Array indexOf
let a = myS.indexOf(max);
    myS[a] = 8;
console.log(`After shearing, here is my flock
    ${myS}`);
//8.4 +8.5 :In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
for (let i=0; i<myS.length; i++) {
    myS[i]+=50;
}
for (i=1; i<=3; i++) {
    console.log(`MONTH ${i}:
    One month has, passed, my sheeps have grown, here are their sizes 
    ${myS}`);
    if (i<3) { 
        max = Math.max(...myS);
        console.log(`My biggest sheep has size ${max}, let's shave it`);
        a = myS.indexOf(max);
        myS[a] = 8;
        console.log(`After shearing, here is my flock
        ${myS}`);
        for (let j=0; j<myS.length; j++) {
            myS[j]+=50;
        }
    } else {
        sum = myS.reduce(function(a, b) {
            return a + b;
        }, 0);
        console.log(`My flock has size in total: ${sum}`);
        console.log(`I would get ${sum} * 2$ = ${sum*2} $`)
    }
}
