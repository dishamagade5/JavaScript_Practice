/*
7. Find the smallest number
let arr = [25, 8, 42, 3, 17]
 */

let arr = [25, 8, 42, 3, 17]

let min = arr[0]

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] < min)
    {
        min = arr[i]
    }
}

console.log(`Min element in an array is : ${min}`)
