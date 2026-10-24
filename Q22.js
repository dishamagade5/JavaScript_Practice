/*
Sum of Digits

Given number 5832, calculate the sum of its digits.

Expected output: 18

Hint: % 10 ani Math.floor() use karun digits separate kar.

*/

let no = 5832
let iDigit = 0 ,iSum = 0

while(no != 0)
{
    iDigit = Math.trunc(no % 10)
    iSum = iSum + iDigit
    no = no / 10
}

console.log(iSum)