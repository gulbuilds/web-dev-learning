// if / else if / else conditions
const temp = 40;
if (temp > 30)
{
    console.log("It's hot");
}
else if (temp >15)
{
    console.log("It's warm");
}
else
{
    console.log("It's cold");
}

// falsy examples
    let name = "";
    if (name)
    {
        console.log("Welcome!"); 
    }
else 
{
    console.log("Please enter your name");
    }                                          //because empaty string(no text) please enter....


if (0) {
  console.log("Hello");
} else {
  console.log("Not executed");
}                               //0 is falsy so not executed


//truthy example
    let username = "NOOR";
if (username) 
{
  console.log("Welcome!");
} 
else {
  console.log("Please enter your name.");
}                        // its a string so welcome!

if ("0") {
  console.log("This runs!"); 
} else {
  console.log("This won't run");
}             // truthy — it's a non-empty STRING, not the number 0


// switch 
const fruit = "apple";

switch (fruit) {
    case  "apple":
    console.log("Apple is red.");
    break;

    case  "banana":
    console.log("Banana is yellow.");
    break;

    case  "mango":
    console.log("Mango is sweet.");
    break;

    default:
    console.log("Fruit not found.");
}

// ✅ Cleaner — "guard clause" style, instead of nesting

function checkStatusClean(loggedIn, admin) {
  if (loggedIn) {
    console.log("Access granted");
    return;         
  }
  if (!admin) {
    console.log("Please login");
    return;
  }
  console.log("Only Admin");
}
