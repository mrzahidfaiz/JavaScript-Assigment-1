// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter 1st Number");
let num2 = +prompt("Enter 2nd Number");
let result = Math.max(num1, num2)

// console.log("Larger Number is", result)

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num1 = +prompt("Enter 1st Number");

if (num1 > 0 ){
    alert("The sign is +");
}
else
{
    alert("The sign is -");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter 1st Number");
let num2 = +prompt("Enter 2nd Number");
let num3 = +prompt("Enter 3rd Number");
let num4 = +prompt("Enter 4th Number");
let num5 = +prompt("Enter 5th Number");

let maxNumber = Math.max(num1, num2, num3, num4, num5)

console.log("Maximum Value Number is:", maxNumber);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    document.write(i + " " + "is even");
  } else {
    document.write(i + " " + "is odd");
  }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

let students = [
  ["Zahid", 100],
  ["Hamza", 65],
  ["Aliya", 33],
];

let averageMarks = 0;

for (let i = 0; i < students.length; i++) {
  averageMarks += students[i][1];
  let average = averageMarks / students.length;

  if (average < 60) {
    console.log("Grade is F");
  } else if (average < 70) {
    console.log("Grade is D");
  } else if (average < 80) {
    console.log("Grade is C");
  } else if (average < 90) {
    console.log("Grade is B");
  } else if (average < 100) {
    console.log("Grade is A");

    console.log("Average Grade is: " + averageMarks / students.length);
  }
}

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
     else if (i % 3 === 0){
        console.log("Fizz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    }
}

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

let x, s;
for(x = 0; x <= 5; x++){
    for(s = 1; s <= x; s++){
        document.write('*')
    }
    document.write('<br>')
}
