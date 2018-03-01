'use strict';

var constants = require('../constants/constants');

var playing1Phrases = [
  {   
    'Phrase': 'My number is <oppComp> than <guess>. No wait, <comp>. Sorry. <comp>. Next guess?.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': '<guess>? That\'s your guess? <guess>, Really? OK then. Mine is <comp>.', 
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is either higher or lower than <guess>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Calculating <beep> <comp>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'The answer is not <oppComp> than <guess>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is higher. That is, when they are arranged alphabetically. Or maybe I mean lower. Whatever.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'You know, I never stipulated that my number was a whole number, and I see you are only guessing whole numbers. That rule could have been clearer. Anyway, it\'s <comp>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': '<prosody pitch="+20%">Congratulations. You guessed my number </prosody><break time="1s" /> is what I would say if <guess> was correct. As it is, my number is <comp>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is <break time="2s"/> Wow. Sorry, there was just a huge virus in the cloud. But I fixed it. You\'re welcome. I think you guessed <guess>. The answer is <comp>',
    // 'NextState': constants.states.PLAYING1
  }
];

module.exports = playing1Phrases;