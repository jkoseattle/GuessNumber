'use strict';

var constants = require('../constants/constants');

var rePromptPhrases = [
  {
    'Phrase': '<prosody pitch="+20%">Hey. Are we playiner what</prosody>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'tick, tick, tick,  it\'s not like i got all day',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Wow, you\'re really thinking hard about this',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/snorenew.mp3" />`,
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase':'Hurry up.<prosody pitch="-20%">Don\'t worry. It\'s not like you\'re hurting my feelings</prosody>',
    // 'NextState': constants.states.PLAYING1
  }
];

// DEBUG PHRASE
// var rePromptPhrases = [
//   {   
//     'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/snorenew.mp3" />`,
//     // 'NextState': constants.states.PLAYING1
//   }
// ];

module.exports = rePromptPhrases;
