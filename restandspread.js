// oldarray = [1,2,3,4,5]
// newarray = ["Ram", "Shyam", ...oldarray, 6,7,8,9] //Spread operator
// console.log(newarray)

// function add(a,b,c){
//     return a+b+c
// }

// console.log(add(1,2,3))
// numbers = [1,2,3]
// console.log(add(...numbers))

// const csStudents = ["Akash","Ashish","Naresh"]
// const itStudents = ["Rahul","Raman","Shyam"]
// const allStudents = [...csStudents, ...itStudents];
// console.log(allStudents)

//Rest Operator
const sum = (...num) => {
    total = 0;
    num.forEach((n)=>{
        total = total + n
    })
    console.log(total)
}
sum(1,2,3,4,5,6,7,8)

function showDetails(name, ...skills){
    console.log(name)
    console.log(skills)
}
showDetails("Akash", "JS", "Dart", "Java")

const student = {
    id: 202,
    name: "Rishabh",
    course: "BTech"
  };
  
  const copyStudent = { ...student };
  console.log(copyStudent);

  const updatedStudent = {
    ...student,
    name: "Batman Ji",
    course: "BTech CS"
  };
  
  console.log(updatedStudent);

  //Default Values
  function greet(name = "Goel"){
    console.log("Hello" + name);
  }
  greet("Akash");
  greet();

let marks = [80]; 
let [math = 0, science = 0] = marks; 
console.log(math); 
console.log(science);

// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); 
// console.log(b);

let data = [0, null];
let [a = 10, b = 20] = data;
console.log(a); 
console.log(b);