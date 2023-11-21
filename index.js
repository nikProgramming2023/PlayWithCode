// I am now going to try a switch statment
const dt = new Date();
const month = dt.getMonth();
let msg;
switch (month) {
  case 0:
    msg = "January 4 is National Spaghetti Day!";
    break;
  case 1:
    msg = "Febuary 9 is National Pizza day!";
    break;
  case 2:
    msg = "March 26 is National Spinach Day! (EWW)";
    break;
  case 3:
    msg = "April 26 is National Pretzel Day!";
    break;
  default: // MAKE SURE TO SPELL DEFAULT CORRECTLY
    msg = "No holidays this month";
}

const el = document.getElementById("message");
el.innerHTML = msg;

// Now moving on to loops
let x = 0;
/*
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
*/

// They can go on for forever
//Now trying postfix notation

/*
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
*/

//Trying for loop now

/*
for (let i = 0; i <= 100; ) {
  console.log(i++);
}
*/

// For loops are now a not so great practice like using the var

// Practicing for ... in loops
const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };
let houseDetails = "<h2>Information About The House.</h2>";
for (let prop in house) {
  houseDetails = `${houseDetails} <br>${prop}: ${house[prop]}<br>`;
  document.getElementById("root").innerHTML = houseDetails;
}

// Be noted like for loops the best use for for ... in loops is now debugging.

// This is a For ... Of loop

const pets = ["Dogs", "Cats", "Chicken"];
for (let pet of pets) {
  console.log(pet);
}
// The For ... Of also works on strings
const text = "Sup, Bro";
for (let charcater of text) {
  console.log(charcater);
}

// Time for while

let guessNumber = 0;
let numberToGuess = 99;
let guess;
while (guess != numberToGuess) {
  guess = Math.floor(Math.random() * 100);
  guessNumber++;
}

document.getElementById(
  "root2"
).innerHTML = `<h2>I Guessed in</h2><p>It only took me ${guessNumber} guesses!</p>`;

// Use curly brackets and the backtic (The one on the corner in your keys)

//Now it is time for a Do ... While

do {
  guess = Math.floor(Math.random() * 100);
  guessNumber++;
} while (guess != numberToGuess);

document.getElementById(
  "root3"
).innerHTML = `<h2>I Guessed in</h2><p>It only took me ${guessNumber} guesses!</p>`;

//Continue

let phoneNumber = "123-456-7890";
for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}
