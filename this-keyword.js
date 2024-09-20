
const user ={
    firstName: 'Ahasan',
    lastName: 'polash',
    message: function(){
        console.log(`Hello! My name is ${this.firstName} and I have a ${product.productName}`)
    }
};
  const product = {
    productName : 'ipad',
    age: 23,
  };
  user.message();