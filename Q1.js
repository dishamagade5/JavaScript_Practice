let numbers = [2,4,6,8,10];
console.log(numbers.join(" "))
console.log(numbers)

let arr = []    //literal empty array 
console.log(arr)

let brr = [10,20,30]    // Creating an Array and Initializing with Values
console.log(brr)

let no = new Array(1,2,3,4,5)   //Array constructor using new keyword
console.log(no)

console.log(no[0])
console.log(no[1])
console.log(no[2])

//process.stdout.write(no[0]) // reuires string 

process.stdout.write(String(no[1]))
console.log()

process.stdout.write(no.join(" "))
console.log()

console.log(...brr)
