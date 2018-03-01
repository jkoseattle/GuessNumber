'use strict';

var constants = require('../constants/constants');

var stopPhrases = [
  {
    'Phrase': 'But you didn\'t guess the number. <prosody pitch="+30%" rate="50%">And it was such a good one</prosody>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Yeah who really cares what the number was, am I right?',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Fine. <break time="1s" /><prosody rate="125%">No really. It\'s fine. Forget it. <prosody pitch="+20%"><sniff>Just forget it.</prosody></prosody>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Thank goodness, I have a ton to do anyway.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase':'Stopping. <prosody pitch="-20%" rate="130%">Don\'t worry. you didn\'t hurt my feelings</prosody>',
    // 'NextState': constants.states.PLAYING1
  }
];

// DEBUG PHRASE
// var stopPhrases = [
//   {   
//     'Phrase': 'Fine. <break time="1s" /><prosody rate="125%">No really. It\'s fine. Forget it. <prosody pitch="+20%"><sniff>Just forget it.</prosody></prosody>',
//     // 'NextState': constants.states.PLAYING1
//   }
// ];

module.exports = stopPhrases;
