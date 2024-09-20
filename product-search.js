
const phones=[
{id: 1,  pName: 'iphone16'  , price: 140000},
{id: 2, pName: 'vivo1 3  max', price: 16000},
{id: 3, pName: 'oppo 12'  , price: 18000},
{id: 4, pName: 'one plus 12' , price: 30000},
{id: 5, pName: 'itel 13' , price: 20000},
{id: 6, pName: 'Samsung 14'  , price: 60000},
{id: 7, pName: 'itel 13' , price: 19000},
{id: 7, pName: 'shayomi 13' , price: 91000},
{id: 7, pName: 'shayomi 13' , price: 2000},
{id: 7, pName: 'samsung 13' , price: 12000}
];

const findPhones = (phones, search) =>{
    const matchingPhones = [];
for(const phone of phones){
    //  console.log(phone.pName.includes(search));
    if( phone.pName.toLowerCase().includes(search.toLowerCase())){
        matchingPhones.push(phone);
        }
   }
      return(matchingPhones);
}

const result = findPhones(phones, 'samsung');
console.log(result)