
// const numbers = [32, 34, 45,56, 67, 54];
// for(let number of numbers){
//     console.log(number)
// }
// ///////////////////////////////////////

const products = {name:'watch', color: 'black', price: 200};
 
const keys = Object.keys(products);
for(let key of keys){
    console.log(products[key]);
}