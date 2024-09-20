
let b = 'programminghero'  //global variable

function func1 (){
    let result = 'Programming Shikbo na'; //local variable
    console.log(result);
}

function func2 (){
    let result = 'Polash';
    console.log(result)  
    console.log(b);
}
func1();
func2();
