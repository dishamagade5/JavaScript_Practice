/* 
Move All Zeros to the End
Given array:
let arr = [0, 5, 0, 3, 8, 0, 2];

Expected output:
[5, 3, 8, 2, 0, 0, 0]
*/
let arr = [0, 5, 0, 3, 8, 0, 2];
let new_arr = []
let temp = 0

for(let i = 0; i < arr.length; i++)
{
   if (arr[i] != 0)
    {
        new_arr.push(arr[i]);
    }
}

for(let i = 0; i < arr.length; i++)
{
   if (arr[i] == 0)
    {
        new_arr.push(arr[i]);
    }
}


console.log(new_arr)

