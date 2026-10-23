/*
let arr = [10, 20, 30, 40, 50];
let target = 30;

Expected output:
[10, 20, 40, 50]
 */

let arr = [10,20,30,40,50]
let target = 30
let index = 0
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == target)
    {
        arr.splice(i,1)
    }
}

console.log(arr)