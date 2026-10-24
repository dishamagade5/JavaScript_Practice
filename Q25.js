/*
Find the Second Smallest Number

Given array:
let arr = [14, 5, 28, 3, 9, 7];

Expected output:
5
*/

let arr = [14, 5, 28, 3, 9, 7];

let smallest = arr[0], second_small = 0

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] < smallest)
    {
        second_small = smallest
        smallest = arr[i]
    }
}

console.log(second_small)