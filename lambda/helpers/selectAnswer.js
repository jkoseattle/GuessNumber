'use strict';

var constants = require('../constants/constants');

module.exports = function selectAnswer() {

  // Alexa picks number from 1-100
  var chosenNumber = Math.floor(Math.random() * constants.guessRange);
  // Add 0.5 to number so that it can never be guessed
  chosenNumber = chosenNumber + 0.5;

  return chosenNumber;

  };
  