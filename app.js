'use strict';
function guessingGame(){
  var correctGuesses = 0;
  var username;

  function userNamePrmpt(){
    username = prompt('Please enter your name');
    alert('Welcome, ' + username + '!');
    console.log('Your username is ' + username);
  }
  userNamePrmpt();

  function firstNameQuestion(){
    var firstNameQ = prompt('Is \"Conor\" Conor\' s first name?');
    firstNameQ = firstNameQ.toLowerCase();
    if (firstNameQ === 'no' || firstNameQ === 'n' ) {
      alert('Correct! Conor\'s first name is Spencer');
    } else {
      alert('Incorrect! Sorry, but Conor\'s first name is Spencer');
      correctGuesses++;
    }
    console.log('Conor\'s first name is Spencer, you answered: ' + firstNameQ);
  }
  firstNameQuestion();

  function bourbonQuestion(){
    var bourbonQ = prompt('Is Conor a Bourbon guy?');
    bourbonQ = bourbonQ.toLowerCase();
    if (bourbonQ === 'yes' || bourbonQ === 'y') {
      alert('Correct! Conor loves Bourbon. Eagle Rare 10 is his favorite.');
      correctGuesses++;
    } else {
      alert('Incorrect! Conor is a Bourbon guy. Eagle Rare 10 is his favorite.');
    }
    console.log('Conor is a Bourbon guy. He has had Van Winkle Family Reserve, but prefers Eagle Rare 10yr. You guessed: ' + bourbonQ);
  }
  bourbonQuestion();

  function conorCityQuestion(){
    var conorCity = prompt('Does Conor live in Seattle?');
    conorCity = conorCity.toLowerCase();
    if (conorCity === 'no' || conorCity === 'n') {
      alert('Correct! Conor lives down in Tacoma');
    } else {
      alert('Incorrect! Sorry, but Conor lives down Tacoma');
      correctGuesses++;
    }
    console.log('Conor does not live in Seattle. He lives in Tacoma. You guessed: ' + conorCity);
  }
  conorCityQuestion();

  function drivingAbilityQuestion(){
    var drivingAbility = prompt('Does Conor know how to drive?');
    drivingAbility = drivingAbility.toLowerCase();
    if (drivingAbility === 'yes' || drivingAbility === 'y') {
      alert('Yes! Conor does know how to drive! Do not listen to his family or girlfriend.');
      correctGuesses++;
    } else {
      alert('Incorrect! Conor has a license, so technically he DOES know how to drive.');
    }
    console.log('Conor DOES know how to drive, despite what his family and girlfriend may have told you. You guessed: ' + drivingAbility);
  }
  drivingAbilityQuestion();

  function huntionQuestion(){
    var hunting = prompt('Does Conor like to hunt?');
    hunting = hunting.toLowerCase();
    if (hunting === 'yes' || hunting === 'y') {
      alert('Conor does love to hunt, his favorite game animals are birds!');
      correctGuesses++;
    } else {
      alert('Incorrect!. Conor does love to hunt, gamebirds are good eatin\'');
    }
    console.log('Conor does like to hunt. Birds are his favorite game animal. You guessed: ' + hunting);
  }
  huntionQuestion();

  // console.log('Correct Guesses = ' + correctGuesses);
  // var answersy = [bourbonQ, drivingAbility, hunting];
  // var answersn = [firstNameQ, conorCity];
  // // var answers = [answersy, answersn];
  //
  // var i = 0;
  // var x = 0;
  // // var a = 0;
  //
  // while (i < 3 ) {
  //   if (answersy[i] === 'yes' || answersy[i] === 'y'){
  //     alert('Correct!');
  //   } else if (answersy[i] === 'no' || answersy[i] === 'n') {
  //     alert('Incorrect');}
  //   else {
  //     alert('That is not a valid answer');
  //   }
  //   i++;
  // }
  //
  // while (x < 2 ) {
  //   if (answersn[x] === 'no' || answersn[x] === 'n'){
  //     alert('Correct!');
  //   } else if (answersn[x] === 'yes' || answersn[x] === 'y') {
  //     alert('Incorrect');}
  //   else {
  //     alert('That is not a valid answer');
  //   }
  //   x++;
  // }

  //Guess a number question

  function guessNumGame(){
    var randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);

    for (var guessNum = 1; guessNum < 5; guessNum++){
      var numberOfGuessesRemaining = 5;
      console.log('For loop');
      numberOfGuessesRemaining = numberOfGuessesRemaining - guessNum;
      var numAnswer = prompt('Guess a number bewtween 1 and 10. You have ' + numberOfGuessesRemaining + ' chances remaining');
      numAnswer = parseInt(numAnswer);
      if(numAnswer === randomNum){
        alert('Correct!');
        correctGuesses++;
        break;
      } else {
        alert('Incorrect!');
        if(guessNum >= 4){
          alert('You\'ve exceeded the allowable number of guesses! The correct number was: ' + randomNum);
        }
      }
    }
  }
  guessNumGame();

  //Array question
  function animalsOwnedGame(){
    var animalsConorOwned = ['ducks', 'dogs', 'geese', 'cats'];
    var numberOfGuesses = 0;
    var guessing = true;

    while(guessing && numberOfGuesses < 6){
      console.log('while');
      var guessAboutAnimalsOwned = prompt('Can you guess a type of animal Conor has owned?');
      for(var x = 0; x < animalsConorOwned.length; x++){
        if (guessAboutAnimalsOwned === animalsConorOwned[x]){
          alert('Correct! Conor has owned ' + animalsConorOwned[x] + '. He has owned ' + animalsConorOwned.toString() + '.');
          guessing = false;
          correctGuesses++;
          break;
        }
        console.log('for loop');
      }
      if(guessing === true){
        alert('Incorrect, guess again!');
      }
      numberOfGuesses++;
      if (numberOfGuesses >= 6){
        alert('You didn\'t guess correctly, Conor has owned ducks, dogs, geese, and cats.');
        console.log('Number of Guesses > 6');
      }
    }
  }
  animalsOwnedGame();

  if (correctGuesses === 7){
    alert('Congratulations, ' + username + ' you got them all right! Are you sure you\'re not Conor?');
  } else {
    alert('You got ' + correctGuesses + ' out of 7, ' + username + ', better luck next time!');
  }
}
// guessingGame();
