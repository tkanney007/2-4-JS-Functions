/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Pop");
  }
}

fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz

/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
//let result = averager(prices);
//console.log(result);

function averager(numArray) {
  let sum = numArray.reduce(sumPrices);

  if (numArray.length > 0) {
    return sum / numArray.length;
  } else {
    return "The average of the numbers in the array cannot be calculated because there are no numbers entered into the array.";
  }
}

function sumPrices(total, value) {
  return total + value;
}

let result = averager(prices);
console.log(result);

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

function celToFah(tempCelcius) {
  let fahrenheit = ((tempCelcius * 9) / 5 + 32).toFixed(2);
  console.log(
    `${tempCelcius} degrees Celcius is ${fahrenheit} degrees Fahrenheit`
  );
}

function celToKel(tempCelcius) {
  let kelvin = (tempCelcius + 273.15).toFixed(2);
  console.log(`${tempCelcius} degrees Celcius is ${kelvin} Kelvin`);
}

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(num, exponent) {
  let result = num ** exponent;
  console.log(`${num} to the power of ${exponent} is ${result}`);
}

pow(2, 3);
pow(16, 20);

//in class code challenge

function isEqual(firstValue, secondValue) {
  if (firstValue === secondValue) {
    console.log(
      `The values ${firstValue} and ${secondValue} are equal and of the same datatype.`
    );
  } else if (firstValue == secondValue) {
    let dataTypeV1 = typeof firstValue;
    let datatypeV2 = typeof secondValue;
    console.log(
      `The values ${firstValue} and ${secondValue} are equal, however the datatypes are not equal. ${firstValue} has a datatype of ${dataTypeV1} and ${secondValue} has a datatype of ${datatypeV2} and therefore are not strictly equal.`
    );
  } else {
    console.log(
      `Sorry the values of ${firstValue} and ${secondValue} are not equal`
    );
  }
}

isEqual(1, 1);
isEqual(1, "1");
isEqual(1, 2);
isEqual("Tom", "Bob");
isEqual("Tom", "Tom");
isEqual("Tom", "TOM");
