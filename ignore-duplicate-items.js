
// const friendlist = ['mukbul', 'sumit', 'sujon', 'lamkin', 'polash', 'mukbul', 'sumit',  'sujon'];

// function ignoreDuplicate(friendlist){
//     let newlist = [];
//     for(let i = 0; i < friendlist.length; i++){
//        const name = friendlist[i];
//         if(newlist.includes(name)=== false){
//             newlist.push(name);
//         }
//     }
//     return newlist;
// }
//  const result = ignoreDuplicate(friendlist);
//  console.log(result)

 ////////////////////////////////////////////

 
const friendlist = ['mukbul', 'sumit', 'sujon', 'lamkin', 'polash', 'mukbul', 'sumit',  'sujon'];

function ignoreDuplicate(friendlist){
    let newlist = [];
    for(let i = 0; i < friendlist.length; i++){
       const name = friendlist[i];
        if(newlist.includes(name)=== false){
            newlist.push(name);
        }
    }
   console.log(newlist);
}
ignoreDuplicate(friendlist);
