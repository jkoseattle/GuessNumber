'use strict';

var constants = require('../constants/constants');

var playing0Phrases = [
  {
    'Phrase': 'My number is <comp> than <guess>. Guess again.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': '<guess> is <oppComp> than my number. Next guess.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'It\'s <comp> than <guess>. Try again.',
    // 'NextState': constants.states.PLAYING1
  },
];

module.exports = playing0Phrases;
