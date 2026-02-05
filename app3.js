//ES6 Arrow Functions 
//For Multiple Arguments
// let add = (a,b) => a+b
// console.log(add(2,3)); 
//if we want to return a object then we have to write it inside brackets ({name:Rishabh})
// let add2 = (a,b) => ({name:"Rishabh"})
// console.log(add2(2,3)); 

//Lexical Scope of this
// const obj = {
//     name: "Rishabh",
//     normalFn: function(){
//         console.log("Normal:", this.name);
//     }, arrowFn: () => {
//         console.log("Arrow:", this.name)  //It will give undefined because arrow function does not uses this also search why?
//     }
// };
// obj.normalFn();
// obj.arrowFn();

const obj = {
    name: "Rishabh",
    showName: function(){
        const arrowFn = () => {
            console.log("Arrow:", this.name);
        }
        arrowFn();
    }
};
obj.showName();

