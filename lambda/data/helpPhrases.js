'use strict';

var constants = require('../constants/constants');

var helpPhrases = [
  {
    'Phrase': 'Guess the number I\'m thinking of. It\'s between one and a hundred.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Do you know what a number is? Good.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': '<prosody pitch="+50%">Help me! </prosody><prosody pitch="+50%" rate="35%">Help me! </prosody> Sorry. Just say a number.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': `<prosody rate="75%"><amazon:effect name="whispered">My number is. sixty seven.</amazon:effect></prosody>`,
    // 'NextState': constants.states.PLAYING1
  }
];

module.exports = helpPhrases;
