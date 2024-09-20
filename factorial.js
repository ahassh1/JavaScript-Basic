
// function sumNum(number){
//     let sum = 0;
// for ( let i = 1; i<=number ; i++){
//     sum = sum+i;
//     console.log(i, sum);
// }
// return sum;
// }
// const result = sumNum(9);
// console.log(result);

////////////////////////////////////


function multi(num){
    let multi = 1;
for ( let i = num; i>=1 ; i--){
    multi = multi+i;
    console.log(multi * i);
}
return multi;
}
const result = multi(9);
console.log(result);