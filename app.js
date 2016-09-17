var userName = prompt('What\'s your name?');
alert('Welcome to my site, ' + userName + '!');

var questionOne = prompt("Do you think I'm from the United States?").toLowerCase();

if (questionOne === 'yes' || questionOne === 'y'){
  alert("Yup, you got it!");
} else if (questionOne === 'no' || questionOne === 'n'){
  alert("You think I'm exotic then, how sweet!");
} else {
  alert("Please answer yes or no.");
}

var questionTwo = prompt("Do you think I'm a big geek?").toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y'){
  alert("How dare you.");
} else if (questionTwo === 'no' || questionTwo === 'n'){
  alert("You're right, I'm only half-geek.");
} else {
  alert("Please answer yes or no.");
}

var questionThree = prompt("Do you think I still get carded?").toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert("You're right, and I take it as a compliment. Besides, 33 is the new 23!");
} else if (questionThree === 'no' || questionThree === 'n'){
  alert("How dare you.");
} else {
  alert("Please answer yes or no.");
}

var questionFour = prompt("Do you think I have road rage?").toLowerCase();

if (questionFour === 'yes' || questionFour === 'y'){
  alert("Guitly as charged.");
} else if (questionFour === 'no' || questionFour === 'n'){
  alert("Ohhh, you have no idea! LOL");
} else {
  alert("Please answer yes or no.");
}

var questionFive = prompt("Would you say I'm at least 5 feet tall?").toLowerCase();

if (questionFive === 'yes' || questionFive === 'y'){
  alert("Good, you don't think I'm a midget.");
} else if (questionFive === 'no' || questionFive === 'n'){
  alert("You really think I'm a midget?");
} else {
  alert("Please answer yes or no.");
}

var questionSix = parseInt(prompt("I'm thinking of a number between 1 and 5. What is it?"));

var myArray = [3, 4];
if (myArray.indexOf(questionSix) > -1) {
  alert("You can read my mind!");
} else {
  alert("You aren't a mind reader afterall.");
}
