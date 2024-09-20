
function sum(num1, num2 ){
      console.log(num1+num2)
}
sum(5, 9);


////////////////////////////////////////////

function sum(){
      let store =0;
      for( let i = 0; i < arguments.length; i++){
            store = store + arguments[i];
      }
}
   sum(2, 4, 5, 6, 7, 8, 9);

   ///////////////////////////////////////////

   function sum(){
      if( arguments.length ==0){
            console.log('Argument is not found ');
   } else{
      let store=0;
      for( let i=0; i < arguments.length; i++){
            store = store + arguments[i];
      }
        console.log(store);
   }
}
let num1=2;
let num2= 6;

sum(num1, num2);