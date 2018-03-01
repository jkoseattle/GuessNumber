'use strict';

var constants = require('../constants/constants');

var welcomePhrases = [
  {
      'Phrase': `Welcome to Jim's number guesser. I'm thinking of a number between one and a hundred. Let's see how quickly you can guess. What's your first guess?`,
      'NextState': constants.states.PLAYING_NORMAL
  },
];

module.exports = welcomePhrases;
