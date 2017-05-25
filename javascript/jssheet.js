// 1. To create two dimesional array related to a subject that interests you.  Output two of the arrays to the console.

//An array with 2 items.
var burgers = ["Chicken Burger", "Cheese Burger"];
//An array with 2 items.
var hotDogs = ["Chili Dog", "Regular Dog"];
//An array with 2 items.
var meats = [burgers, hotDogs];


//Use console.log to print to the console.
  console.log(meats);
  console.log(meats[0][1]); //Indexes the proper string.
  console.log(meats[1][0]); //Indexes the proper string.


// 2. Declare a function that takes a name as an argument, and returns a new string that compliments that person.
function person(name) {
  return "I think" + name + "is a cool guy";
}

console.log(person(" Sam "));
console.log(person(" Bobby "));
console.log(person(" Dave "));


// 3. Print the classic "99 bottles of beer on the wall" song to the console, in its entirety, using a for loop.
// then make a copy of that, and rewrite it to use a while loop instead.
// (FOR) LOOP of the song 99 bottles of beer...

for (var b = 99; b > 0; b--) {
	console.log(b + " bottles of beer on the wall " + b + " bottles of beer...");
// The b -1 allow for a counte to be placed in to the second string to that one bottle is removed
// always in the secong string.
	console.log(" take one down, pass it around ", + b - 1 + " bottles of beer on the wall");
}


//(WHILE) LOOP of the song 99 bottoles of beer on the wall.

var b = 99;
while (b >= 1) {
	console.log(b + " bottles of beer on the wall ", + b + " bottles of beer...");
	b--; // This keeps the program from running an endless loop..
	console.log(" take one down, pass it around ", + b + " bottles of beer on the wall");
}

// // 4. Declare a function that takes in an array as an argument, and console logs out all of its elements backwards.
// Declaring the array.
var myArray = ["Juventus", "Lazio", "Roma", "AC Milan"];
function arrayCounter(array) {
	for (var i = array.length - 1; i >= 0; --i) {
		console.log(array[i]);
	}
}
// Calling the function.
arrayCounter(myArray);

//Using console.log to print the reversed array in the console.
console.log(myArray);
