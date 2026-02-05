let add = (a,b) => (a+b);
let subtract = (a,b) => (a-b);
let multiply = (a,b) => (a*b);
let divide = (a,b) => {
    if(b!= 0){
        return (a/b);
    }else{
        return undefined;
    }
}

let a = 10;
let b = 5;
let operator = "+";

let result;

switch (operator) {
    case "+":
        result = add(a, b);
        break;

    case "-":
        result = subtract(a, b);
        break;

    case "*":
        result = multiply(a, b);
        break;

    case "/":
        result = divide(a, b);
        break;

    default:
        console.log("Invalid operator");
}

console.log(result);