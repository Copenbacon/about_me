'use strict';
var username = prompt('Please enter your name');
alert('Welcome, ' + username + '!');
console.log('Your username is ' + username);
var firstNameQ = prompt('Is \"Conor\" Conor\' s first name?');
firstNameQ.toLowerCase();
if (firstNameQ == 'yes') {
  alert('Sorry, but Conor\'s first name is Spencer');
}
else{
  alert('Correct!')
}
console.log('Conor\'s first name is Spencer, you answered: ' + firstNameQ);
var bourbonQ = prompt('Is Conor a Bourbon guy?');
bourbonQ.toLowerCase();
if (bourbonQ == 'yes') {
  alert('Correct! Conor loves Bourbon. Eagle Rare 10 is his favorite.');
}
else{
  alert('Conor is a Bourbon guy. Eagle Rare 10 is his favorite.')
}
console.log('Conor is a Bourbon guy. He has had Van Winkle Family Reserve, but prefers Eagle Rare 10yr. You guessed: ' + bourbonQ);
var conorCity = prompt('Does Conor live in Seattle?');
conorCity.toLowerCase();
if (conorCity == 'yes') {
  alert('Sorry, but Conor lives down Tacoma');
}
else{
  alert('Correct! Conor lives down in Tacoma')
}
console.log('Conor does not live in Seattle. He lives in Tacoma. You guessed: ' + conorCity);
var drivingAbility = prompt('Does Conor know how to drive?');
drivingAbility.toLowerCase();
if (drivingAbility == 'yes') {
  alert('Yes! Conor does know how to drive! Do not listen to his family or girlfriend.');
}
else{
  alert('Conor has a license, so technically he DOES know how to drive.')
}
console.log('Conor DOES know how to drive, despite what his family and girlfriend may have told you. You guessed: ' + drivingAbility);
var hunting = prompt('Does Conor like to hunt?');
hunting.toLowerCase();
if (hunting == 'yes') {
  alert('Conor does love to hunt, his favorite game animals are birds!');
}
else{
  alert('Conor does love to hunt, gamebirds are good eatin\'')
}
console.log('Conor does like to hunt. Birds are his favorite game animal. You guessed: ' + hunting);
