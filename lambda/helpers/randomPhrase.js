'use strict';

var secretLanguage = require('./secretLanguage');
var constants = require('../constants/constants');

module.exports = function randomPhrase(aPhrases, aUsedPhrases, aGuess, aComparison) {
  
  // Pick a phrase at random from the array of phrases
  // first make sure it's not one that's already used
  var random = '';
  if (aUsedPhrases) {
    var found = 0;
    while (found != -1) {
      random = Math.floor(Math.random() * aPhrases.length);
      found = aUsedPhrases.indexOf(random);
    }
  } else {
    random = Math.floor(Math.random() * aPhrases.length);
  }

  var chosenPhrase = aPhrases[random].Phrase;


  var nextState = aPhrases[random].NextState;
  
  // Replace ~ character with the guessed number
  if (aGuess) {
      var re = /<guess>/g;
      chosenPhrase = chosenPhrase.replace(re, aGuess);
  };
    
  // Replace # character with comparison (i.e. "higher" or "lower")
  // (also set opposite comparisons)
  if (aComparison) {
    re = /<comp>/g;
    chosenPhrase = chosenPhrase.replace(re, aComparison);

    re = /<oppComp>/g;
    var oppComp = '';
    if (aComparison=='higher') {
      oppComp = 'lower'
    } else { oppComp = 'higher'; }
    chosenPhrase = chosenPhrase.replace(re, oppComp);
  };
  
  // Replace <lang> with secret language word
  re = /<lang>/g;
  var word = secretLanguage();
  chosenPhrase = chosenPhrase.replace(re, word);

  // Replace <temp> with random number
  re = /<temp>/g;
  var temp = Math.floor(Math.random() * 900);
  chosenPhrase = chosenPhrase.replace(re, temp);
  
  // Replace <beep> with computer audio
  re = /<beep>/g;
  var beep = `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/computernew.mp3" />`;
  chosenPhrase = chosenPhrase.replace(re, beep);
  
  // Replace <minutes> with random number of minutes
  re = /<minutes>/g;
  var min = Math.floor((Math.random() * 8)+1) * 100;
  min = min + ". " + Math.floor((Math.random() * 8)+2) * 10;
  min = min + ". " + Math.floor((Math.random() * 9)+1) + ". ";
  chosenPhrase = chosenPhrase.replace(re, min);
  
  // Replace <hold> with on-hold music
  re = /<hold>/g;
  var hold = `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/holdnew.mp3" />`;
  chosenPhrase = chosenPhrase.replace(re, hold);
  
  // replace wrong number
  re = /<wrong>/g;
  var wrongNumber = Math.floor(Math.random() * constants.guessRange) + 1000000;
  chosenPhrase = chosenPhrase.replace(re, wrongNumber);
  
  // replace <sigh> with audio
  re = /<sigh>/g;
  var sigh = `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/sighnew.mp3" />`;
  chosenPhrase = chosenPhrase.replace(re, sigh);
  
  // replace <sniff> with audio
  re = /<sniff>/g;
  var sniff = `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/sniffnew.mp3" />`;
  chosenPhrase = chosenPhrase.replace(re, sniff);
  
    
  return { 
    'Phrase': chosenPhrase, 
    'NextState': nextState,
    'Index': random
  };
      
  };
  