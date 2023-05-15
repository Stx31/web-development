//foreach///////
 const numbers =[1,2,3,4,4,5,6,7,8,9,]
 function print (elemtent ){
    console.log (elemtent)
 }
 numbers.forEach(print)

 // DO NOT ALTER THE FOLLOWING CODE:
//const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const fullNames = [
    "Albus Dumbledore",
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Rubeus Hagrid",
    "Minerva McGonagall",
    "Severus Snape"
  ];

  const firstNames = fullNames.map(fullName => {
    return fullName.split(" ")[0];
  });

  console.log(firstNames);
  ///////////////////////////////////////
  const greet = (name) => {
    console.log(`Hey, ${name}!`);
  };
  //const isEven = function(num){
    //regular fucnion expresion
    //return num % 2 === 0; 

   //const isEven = (num)=>{
    //arrow function with parens around the params 
   //}
   