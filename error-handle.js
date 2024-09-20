
// "use strict"
function adding(a, b){
    if( typeof a !== 'number' || typeof b !== 'number'){
        return 'Enter a number';
    }
    return a + b;
}      

   const result = adding (3, 7);
   console.log(result);
   