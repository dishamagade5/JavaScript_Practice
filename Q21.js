/*
Second Largest Number

Given array [12, 45, 7, 89, 34], find the second largest number without using sort().

Hint: Largest ani second largest sathi don variables use kar.
 */

let array = [12, 45, 7, 89, 34]
let max = 0, second_max = 0

for(let i = 0; i < array.length-1; i++)
{
    if(array[i] > max)
    {
        second_max = max
        max = array[i]
    }
}
console.log(second_max)