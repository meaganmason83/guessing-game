'use strict';

var userName = prompt('What\'s your name?');
alert('Welcome to my site, ' + userName + '!');


var meaganFunction = function() {

  var questionOne = prompt('Do you think I\'m from the United States?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    alert ('Yup, you got it!');
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert ('You think I\'m exotic then, how sweet!');
  } else {
    alert ('Please answer yes or no.');
  }
};
meaganFunction();

var meagantwoFunction = function() {
  var questionTwo = prompt('Do you think I\'m a big geek?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert ('How dare you.');
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert ('You\'re right, I\'m only half-geek.');
  } else {
    alert ('Please answer yes or no.');
  }
};
meagantwoFunction();

var meaganthreeFunction = function() {
  var questionThree = prompt('Do you think I still get carded?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    alert ('You\'re right, and I take it as a compliment. Besides, 33 is the new 23!');
  } else if (questionThree === 'no' || questionThree === 'n') {
    alert ('How dare you.');
  } else {
    alert ('Please answer yes or no.');
  }
};
meaganthreeFunction();

var meaganfourFunction = function() {
  var questionFour = prompt('Do you think I have road rage?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    alert ('Guitly as charged.');
  } else if (questionFour === 'no' || questionFour === 'n') {
    alert ('Ohhh, you have no idea! LOL');
  } else {
    alert ('Please answer yes or no.');
  }
};
meaganfourFunction();

var meaganfiveFunction = function() {
  var questionFive = prompt('Would you say I\'m at least 5 feet tall?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    alert ('Good, you don\'t think I\'m a midget.');
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert ('You really think I\'m a midget?');
  } else {
    alert ('Please answer yes or no.');
  }
};
meaganfiveFunction();

var meagansixFunction = function() {
  var questionSix = parseInt(prompt('I\'m thinking of a number between 1 and 5. What is it?'));

  var myArray = [3, 4];

  if (myArray.indexOf(questionSix) > -1) {
    alert ('You can read my mind!');
  } else {
    alert ('You aren\'t a mind reader afterall.');
  }
};
meagansixFunction();

var meagansevenFunction = function() {

  var myAnswer = 8;
  var guesses = 3;

  for (var i = 0; i < guesses; ++i) {
    var questionSeven = parseInt(prompt('Now I\'m thinking of a number between 5 and 10. What is it?'));

    if (questionSeven === myAnswer) {
      alert ('Correct.');
      break;
    } else if (questionSeven > myAnswer) {
      alert ('Too high.');
    } else if (questionSeven < myAnswer) {
      alert ('Too low.');
    } else {
      alert('Please enter a number.');
    }
  }
};
meagansevenFunction();

var meaganeightFunction = function() {
  var questionEight = prompt('Which Seattle neighborhoods have I lived in?').toLowerCase();

  var myHood = ['university district', 'wallingford', 'phinney ridge', 'west seattle', 'capitol hill'];

  if (myHood.indexOf(questionEight) > -1) {
    alert('Bingo!');
  } else {
    alert('Keep guessing.');
  }
};
meaganeightFunction();
