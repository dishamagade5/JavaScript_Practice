/*
Count numbers greater than 10
let arr = [5, 15, 8, 22, 10, 30, 3];

 */

let arr = [5,15,8,22,10,30,3]

let greater = 0

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > 10)
    {
        greater++
    }
}

console.log(`Greater elements count than 10 is : ${greater} `)