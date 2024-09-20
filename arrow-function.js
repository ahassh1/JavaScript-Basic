//normal function

function sumNumber(num1, num2){

return num1+num2;
}
console.log(sumNumber(20, 30)); 
////////////////////////////////////////////////

//arrow function
const sumNumber2 = (num1, num2) =>{

    return num1+num2;
    }
    console.log(sumNumber(20, 30));
    console.log(sumNumber2(20, 30));
//////////////////////////////////////////////////

const sumNumber3 = (num1, num2) => num1+num2;
console.log(sumNumber3(20, 30));