/*
6 Count how many numbers from 1 to 30 are divisible by 3.

 */

let iCount = 0

for(let i =0; i <= 30; i++)
{
    if(i % 3 == 0)
    {
        iCount++
    }
}
console.log(iCount)