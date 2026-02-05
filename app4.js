//Object and Array Destructuring : uses for cleaning the code by removing unnecessary variables

// const user = {
//     fName: "Rishabh",
//     lName: "Kumar",
//     Address: {
//         city: "Ghaziabad",
//         country: "India"
//     }
// };

// let a = user.fName
// console.log(a)
// let b = user.Address.city
// console.log(b)
// let{fName: fn,lName: ln,Address:{city,country}} = user
// console.log(fn,ln)
// console.log(city)

let number = [1, 2, 3, 4, 5]
// let[a, b, c] = number;
// console.log(c)  //Left values will be ignored
// let[a, b, c, , e] = number;
// console.log(e) 

// let colours = ["Red", "Yellow", "Blue", "Violet"]
// let[a, b, , d] = colours
// console.log(d)

//Very Imp
const student = {
    name: "Akash",
    age: 20,
    city: "Ghaziabad"
};
function showStudent({name, age, city}){
    console.log("Name:", name);
    console.log("Age", age);
    console.log("city", city);
}
showStudent(student);