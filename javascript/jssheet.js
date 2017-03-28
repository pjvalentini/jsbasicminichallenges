// 1. To create two dimesional array related to a subject that interests you.  Output two of the arrays to the console.

//An array with 2 items.
var burgers = ["Chicken Burger", "Cheese Burger"];
//An array with 2 items.
var hotDogs = ["Chili Dog", "Regular Dog"];
//An array with 2 items.
var meats = [burgers, hotDogs]


//Use console.log to print to the console.

  console.log(meats)
  console.log(meats[0][0]);
  console.log(meats[1][0]);

// 2. Declare a function that takes a name as an argument, and returns a new string that compliments that person.


function person(name) {
  return "I think" + name + "is a cool guy";
}

console.log(person(" PJ "));
console.log(person(" Bill "));
console.log(person(" Joe "));


// 3. Print the classic "99 bottles of beer on the wall" song to the console, in its entirety, using a for loop. Then make a copy of that, and rewrite it to use a while loop instead.

// FOR LOOP of the song 99 bottles of beer...

for (var b = 99; b > 0; b--) {
  console.log(b + "bottles of beer on the wall");
}

 //WHILE LOOP

var b = 99;
  while (b >= 1){
    console.log(b + " bottles of beer on the wall ", + b + " bottles of beer...");
        b--;
    console.log(" take one down, pass it around ", + b + " bottles of beer on the wall");
  }

// 4. Declare a function that takes in an array as an argument, and console logs out all of its elements backwards.

// // //Declaring the array.
var myArray = ["Juventus", "Lazio", "Roma", "AC Milan"];
//Using the Reverse Command to reverse the order of the array.
function arrayCounter(array) {
  for (var i = array.length - 1; i >= 0; --i) {
    console.log(array[i])
  };
}
arrayCounter(myArray);

//Using printConsole Function to print the reversed array in the console.
 console.log(myArray);
