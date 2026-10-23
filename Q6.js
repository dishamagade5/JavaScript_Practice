let arr = [10,20,30,40,50]

console.log(arr.length)

console.log(arr.toString())

console.log(arr.join("/"))

arr.push(60)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(70)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.slice(1,3))

arr.splice(2,75)
console.log(arr)

console.log(arr.includes(20));

delete arr[1];
console.log(arr); 
console.log(arr.length);