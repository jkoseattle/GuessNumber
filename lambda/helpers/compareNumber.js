'use strict';

module.exports = function compareNumber(actualNumber, guessedNumber) {

  let comparison = 'same';

  if (guessedNumber >  actualNumber) {
    comparison = 'lower';
  } else if (guessedNumber < actualNumber) {
      comparison = 'higher';
  };

  return comparison;

  };
  