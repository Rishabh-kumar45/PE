//Template Literals
// let fname = "Rishabh";
// let lname = "Kumar";
// console.log(`Hello my name is ${fname} ${lname}`);
// let msg = `Hello dear student
// welcome to the class of JS
// focus on your topics`;
// console.log(msg);

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//Arrow function
// let add = (a,b) => (a+b);
// console.log(add(2,3));

// let a = 10;
// let b = 20;
// console.log(`The sum of ${a} and ${b} is ${a+b}`);

// const obj = {
//     name: "Rishabh",
//     age: 20,
//     welcome: function(){
//         console.log("My name is",this.name,this.age) //This always refers to current object
//         console.log(this);
//     }
// };
// obj.welcome();

// obj.name = "Vikas"
// obj.welcome();
// console.log(this);

// function abc(){
//     name1 = "Rishabh";
//     console.log(name1);
// }
// abc();

//In JS we have non strict mode and strict mode..default is non strict mode
'use strict'
function abc(){
    let a=10;  //it will be undefined using this.a because we dont use this with functions
    console.log(this.a);
}
abc()