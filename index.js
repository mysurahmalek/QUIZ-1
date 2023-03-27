// Exercise 
let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString() + parseFloat(data2)
console.log(data3, typeof data3)

// Array
let data = ["one", 2, true]
console.log(data[2], typeof data[2])

// Object
let user = {
    name: "soo",
    faculty: "fkekk",
    phone: {
        office: "123456",
        mobile: "654131"
    },
    email: "soo@utem.edu.my"
}
console.log( user.phone.mobile )
console.log( user.phone.home )