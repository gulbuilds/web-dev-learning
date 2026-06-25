// ---    OPERATORS  
//  Arithmetic Operators
const a=7;
const b=8;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Divison:",a/b);
console.log("Multiplication:",a*b)
console.log("Modulus:",a%b);       // 7 remainder 
console.log("Exponent:",a**b);      // a to the power of b

// Assignment Operators
let score = 10;
score += 5;  //15
score -= 4;  // 15-4=11
score *=3;   //11*3=33
score /=2;   // 33/2=16.5
console.log(score); 

// Comparison Operators
console.log(5== "5");  // true loose equality — converts types before comparing
console.log(5 === "5"); //false strict equality — checks value AND type

console.log(15 != "15");    // false
console.log(15 !== "15");  // true

console.log(8 > 10);  
console.log(11 < 15);
console.log(12 >= 13);
console.log(2 <= 5);

// Logical Operator 

const loggedin = true;
const permission = false;
const isadmin = true;
console.log(loggedin && permission);  // AND:all conditions must true
console.log(loggedin || permission ); // OR: at least one true 
console.log(!loggedin );            // NOT: 

console.log("Combine Logical Operator:",loggedin && (permission || isadmin)); 
// Ternary Operator
const number = 7;
console.log(number % 2 == 0 ? "EVEN" : "ODD");

// String Concatenation
const firstName = "gul";
const lastName = "bilds";

console.log(firstName + " " + lastName); 

// Watch out: mixing types with + can surprise you
console.log("5" + 3);   // "53"  string wins, number gets converted to text
console.log(5 + 3);     // 8    both numbers, normal math
console.log("5" - 3);   // 2   minus FORCES number conversion (only + behaves this way)

// Nullish Coalescing Operator(??)

const user = {
  name: "Noor",
  city: null
};
const city = user.city ?? "Pakistan";    // ?? Use the default only when the value is null or undefined
console.log(city);






