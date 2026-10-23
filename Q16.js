/*
Count even and odd numbers

let arr = [12, 7, 4, 9, 16, 3, 8];

Count how many even numbers and odd numbers are present.

Expected output:
Even: 4
Odd: 3

 */


let arr = [12, 7, 4, 9, 16, 3, 8];

let even = 0, odd = 0

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] % 2 == 0)
    {
        even++
    }
    else
    {
        odd++
    }
}

console.log(`Even : ${even}`);
console.log(`Odd : ${odd}`);