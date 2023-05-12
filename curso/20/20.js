// define isSnakeEyes below:
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
      console.log("Snake Eyes!");
    } else {
      console.log("Not Snake Eyes!");
    }
  }
  
  isSnakeEyes(1, 1);   
////////////////////////////////////////////////////////////////


  // DEFINE YOUR FUNCTION BELOW:
function multiply(num1, num2) {
    return num1 * num2;
  }
 
  const result = multiply(3, 4);
  console.log(result); // Output: 12

//////////////////////////////////////////////////////////////////////
  // DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
      return true;
    } else {
      return false;
    }
  }
  
 

  console.log(isShortsWeather(80)); // Output: true
  console.log(isShortsWeather(48)); // Output: false
  console.log(isShortsWeather(75)); // Output: true

  /////////////////////////////////////////////
  function lastElement(array) {
    if (array.length === 0) {
      return null;
    } else {
      return array[array.length - 1];
    }
  }
  
 
  console.log(lastElement([1, 2, 3, 4])); 
  console.log(lastElement(['a', 'b', 'c']));
  console.log(lastElement([])); 
 
  /////////////////////
  function capitalize(str) {
    if (str.length === 0) {
      return str;
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
  
 
  console.log(capitalize("hello world")); // Output: "Hello world"
  console.log(capitalize("")); // Output: ""
  console.log(capitalize("foo")); // Output: "Foo"


  ///////////////////////////////////////

  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Call the function with different arrays and print the result
  console.log(sumArray([1, 2, 3, 4])); // Output: 10
  console.log(sumArray([10, -5, 3, 7])); // Output: 15
  console.log(sumArray([])); // Output: 0

  ///////////////////////////////////////
  // DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    if (num < 1 || num > 7) {
      return null;
    } else {
      const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      return daysOfWeek[num - 1];
    }
  }
  
 
  console.log(returnDay(1)); // Output: "Monday"
  console.log(returnDay(4)); // Output: "Thursday"
  console.log(returnDay(7)); // Output: "Sunday"
  console.log(returnDay(0)); // Output: null
  console.log(returnDay(8)); // Output: null
  
  //////////////////////// ejrs//////////////
  const square = function(num) {
    return num * num;
  }

  //////////////////////// higher order funcion /////////////////
  let greet = function() { console.log("hi")}

  function calltwice(funcion){ 
    funcion()//we can call them if we put the number on the "()"
    funcion()
  }
  function lought ( ){
    console.log (" HAHAHAHAHHA  ")

  }
  calltwice(lought)
  /////////////////// returning funcion////////////////////////

  