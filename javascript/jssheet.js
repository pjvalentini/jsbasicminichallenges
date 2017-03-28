// 1. To create two dimesional array related to a subject that interests you.  Output two of the arrays to the console.

//An array with 3 items.
var teams = ["Arsenal", "ParisSG", "NYCosmos"];
//An array with 3 items.
var locations = ["London", "Paris", "New York"];

//Using the printConsole() function to print out both variable arrays with indexed data teams[0], and locations [0], the end result is Arsenal and London are printed out in the console.
function printConsole() {
  console.log(teams[0]);
  console.log(locations[0]);
}
printConsole();


// 2. Declare a function that takes a name as an argument, and returns a new string that compliments that person.


function pj() {
  alert("PJ is pretty a cool dude!")
}
pj();


// 3. Print the classic "99 bottles of beer on the wall" song to the console, in its entirety, using a for loop. Then make a copy of that, and rewrite it to use a while loop instead.

//FOR LOOP
var song = ("99 Bottles of beer in the wall, 99 bottles of beer, take one down pass it around 98 bottles of beer on the wall.");

for (var i = 0; i < song.length; i++) {
  console.log(song);
}

//WHILE LOOP

var song = "99 Bottles of beer in the wall, 99 bottles of beer, take one down pass it around 98 bottles of beer on the wall.";

while (song.length < 99) {
  song = song + "99 Bottles of beer in the wall, 99 bottles of beer, take one down pass it around 98 bottles of beer on the wall.";
  console.log(song);
}

// 4. Declare a function that takes in an array as an argument, and console logs out all of its elements backwards.

// //Declaring the array.
var italianTeams = ["Juventus", "Lazio", "Roma", "AC Milan"];
//Using the Reverse Command to reverse the order of the array.
italianTeams.reverse();

//Using printConsole Function to print the reversed array in the console.
 function printConsole() {
  console.log(italianTeams);
}
printConsole();
