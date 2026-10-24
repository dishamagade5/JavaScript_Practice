/* 
Find the Missing Number

Given array [1, 2, 3, 5, 6], find the missing number between 1 and 6.

Expected output: 4

 */

let arr = [1,2,3,5,6]

let arr_sum = 0, expc_sum = 0

for(let i = 0; i<arr.length; i++)
{
    arr_sum = arr_sum + arr[i]
}

for(let j = 1; j<= 6; j++)
{
    expc_sum = expc_sum + j
}

if(arr_sum != expc_sum)
{
    expc_sum = expc_sum - arr_sum
    console.log(expc_sum)
}