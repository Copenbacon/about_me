'use strict';
var username = prompt('Please enter your name');
alert('Welcome, ' + username + '!');
console.log('Your username is ' + username);
var firstNameQ = prompt('Is \"Conor\" Conor\' s first name?');
firstNameQ.toLowerCase();
console.log('Conor\'s first name is Spencer, you answered: ' + firstNameQ);
var bourbonQ = prompt('Is Conor a Bourbon guy?');
bourbonQ.toLowerCase();
console.log('Conor is a Bourbon guy. He has had Van Winkle Family Reserve, but prefers Eagle Rare 10yr. You guessed: ' + bourbonQ);
var conorCity = prompt('Does Conor live in Seattle?');
conorCity.toLowerCase();
console.log('Conor does not live in Seattle. He lives in Tacoma. You guessed: ' + conorCity);
var drivingAbility = prompt('Does Conor know how to drive?');
drivingAbility.toLowerCase();
console.log('Conor DOES know how to drive, despite what his family and girlfriend may have told you. You guessed: ' + drivingAbility);
var hunting = prompt('Does Conor like to hunt?');
hunting.toLowerCase();
console.log('Conor does like to hunt. Birds are his favorite game animal. You guessed: ' + hunting);
