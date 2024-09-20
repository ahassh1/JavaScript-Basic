
const numbers = [3, 4, 5, 6];
const sumResult = numbers.reduce( (preValue, currentValue) => {
//    console.log(`preValue: ${preValue} and CurrentValue ${currentValue} `);
    return preValue + currentValue;
}, 0);

  console.log(sumResult);
  ///////////////////////////////////////////////////////


  const shoppingCard = [
    {
        items : 'tshirt',
        price : 200,
    },

    {
        items : 'watch',
        price : 300,
    },

    {
        items : 'pant',
        price : 700,
    },
  ];

 const totalPrice =   shoppingCard.reduce(( preValue, currentValue) => preValue+ currentValue.price, 0);
    console.log(totalPrice);

    ///////////////////////////////////////


