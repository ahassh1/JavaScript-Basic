const product = {
    name: 'laptop',
    price:42000,
    color:'black',
    variant: 'media',
};
console.log(product.price);

//////////////////////////////////

var myObj ={
    name : 'polash',
    age : 21,
    nextObj: {
        favMovies: 96,
        favColor: 'black',
    }

};
  console.log(myObj.nextObj.favColor);

  Object.freeze(myObj);
  myObj.name = 'ahasan habib';
  console.log(myObj['name']);

  //////////////////////////////////////////

