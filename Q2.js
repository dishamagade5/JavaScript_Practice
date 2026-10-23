let a =["HTML","CSS","JS"]

console.log(a[0])
console.log(a[1])
console.log(a[2])

console.log("First elemnet : ",a[0])
console.log("Last element : ",a[a.length-1])

//Modyfying array
a[1] = "Bootetsrap"
console.log(a)

// add to last
a.push("Database")
console.log(a)

//add to start
a.unshift("Browser")
console.log(a)

for(let i = 0; i < a.length; i++)
{
    console.log(`index : ${i} element : ${a[i]}`)
}


