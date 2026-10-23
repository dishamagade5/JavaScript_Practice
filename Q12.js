/*
Find the largest number

let arr = [12, 45, 7, 89, 23];
*/

let arr = [12, 45, 7, 89, 23];

let max = 0

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i]
    }
}
console.log(`Max elemnet in array is : `,max)

