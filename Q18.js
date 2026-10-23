/* 
Reverse an array
let arr = [10, 20, 30, 40, 50];

*/

let arr = [10, 20, 30, 40, 50];

let resverse = [];

for(let i = arr.length-1; i >= 0; i--)
{
    resverse.push(arr[i])
}

console.log(resverse.join(" "))