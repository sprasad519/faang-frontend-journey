// Print numbers 1 to 20.
// For multiples of 3: print "Fizz"
// For multiples of 5: print "Buzz"
// For multiples of both 3 and 5: print "FizzBuzz"
// Otherwise, print the number itself.

// for (let i = 1; i < 21; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (const i = 1; i < 21: i++){
//    output =""
//    if ( i% 3 === 0)
//     output += "Fizz";
//     if (i % 5 === 0)
//     output += "Buzz";
//     console.log(output || i);

// }

// FizzBuzz as a Function
function FizzBuzz(x){
  for (let i=1; i <= 21; i++)
    let output = "";
   if (i % 3 === 0) 
     output += "Fizz";
    if (i % 5 === 0)
     output += "Buzz";        
    console.log(output || i);
}
