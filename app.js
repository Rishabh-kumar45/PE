// document.writeln("Hello");
// console.log("Hello");

// var a = 10 //global scoped and can be re-declared whether written inside a block..still accessible outside
// console.log(a)
// a = 20
// console.log(a)
// function show(){
//     console.log(10)
// }
// show()

// function varTest(){
//     if(true){
//         var a = 10 //function scoped here
//     }console.log(a)
// }
// varTest()

// function varTest(){
//     if(true){
//         let a = 10 //let is block scoped only
//     }console.log(a)
// }
// varTest()

// const a = 10;
// a=20; //can't change value
// console.log(a);

// const student = {name1 : "Akash"} 
// console.log(student.name1);
// student.name1 = "Rishabh"; //can change value but cant change key(object's reference can't be changed)
// console.log(student.name1);

//class have property and behaviour
// const student = {
//     name1 : "Akash", //property
//     greet: function(){  //Behaviour
//         console.log("Hello, My name is " + this.name1); 
//     }
// }
// student.greet();

//exercise-1
// let age = 18;
// console.log(age);
// age = 19;
// console.log(age);

// const pi = 3.24;

// for(let i=0;i<=5;i++){
//     console.log(i);
// }

function outer(){
    let a = 10;
    function inner(){
        console.log(a); //lexical scope
    }inner()
}outer()

let a = 10;
let isPrime = false;
for(let i=2;i<a;i++){
    if(a%i == 0){
        isPrime = false;
        break;
    }else{
        isPrime = true;
    }
}if (isPrime){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
//highest marks
const run = {
    Rohit: 264,
    Virat: 183,
    Dhoni: 183
  };
  
  let maxRun = 0;
  let topPlayer = "";
  
  for (let player in run) {
    if (run[player] > maxRun) {
      maxRun = run[player];
      topPlayer = player;
    }
  }
  
  console.log(topPlayer + " has the highest run: " + maxRun);

  //student name in lexical order