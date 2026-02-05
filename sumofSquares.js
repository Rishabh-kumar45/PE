//Given array -> sum of squares of even numbers 
// let numbers = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for(i=0;i<numbers.length;i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//         sum = sum + numbers[i] * numbers[i]
//     }
// }
// console.log(sum);

//Using anonymous function
const sumOfSquaresOfEven = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i] ** 2;
        }
    }

    return sum;
};

console.log(sumOfSquaresOfEven(numbers));