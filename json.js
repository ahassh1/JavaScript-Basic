

// const product= {
//     firstN : 'juse',
//     secondN : 'litche',
//     price :  20,
// }
// console.log(JSON.stringify(product));

let product = '{"itemName" : [' + 
'{ "firstN": "juse", "secondN" : "litche"},' +
'{ "age" : 20,}]}'; 

console.log(JSON.parse(product));