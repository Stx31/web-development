 const id =setInterval(()=>{
    console.log(Math.random())
}, 200 );

// filters //
//vamos.filter (movies =>{
    //return movies.score >90
//})

function validUserNames(usernames) {
    return usernames.filter(username => username.length < 10);
   
   } 
   
   // some// and every//

/////////////////
   function allEvens(arr) {        //he array contains all even numbers, return true//
    for (let num of arr) {
      if (num % 2 !== 0) {
        return false;
      }
    }
    return true;
  }

  //const prices= [9.99 , 21.21, 22.20 ,43.90]
  //let total =0;
  //for (let price of prices){
   // total += prices
 // }
  //console.log(total)        thats the same that we have under just a difetne pov to do it 

   const total =prices.reduce((total, price )=>{
    return total + price
  })