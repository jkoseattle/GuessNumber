'use strict';

var constants = require('../constants/constants');

var playing2Phrases = [
  {
    'Phrase': 'Wait, I lost my number somewhere in the cloud. Is this it? No. One moment please. <break time="2s" />OK, found it. You guessed <guess> right? OK, mine is <comp>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'There was a problem with the requested skills response. But it wasn\'t a big problem, so let\'s keep playing. My number is <comp> than <guess>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'I\'m going to tell you my number, but I\'m going to say it in my own secret language: <break time="500ms" />OK, my number is <break time="200ms" /><prosody pitch="+15%"><phoneme alphabet="x-sampa" ph="<lang>"><lang></phoneme></prosody>. <break time="500ms" />And the number <phoneme alphabet="x-sampa" ph="<lang>"><lang></phoneme>, is <comp> than <guess>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'In the cloud, it is currently <temp> degrees, and very very cloudy. Anyway, my number is <comp>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is, wait for it, and here it comes. My number is actually, when it comes right down to it, the number that I have chosen at random is, when compared to the number that you just guessed, well, I have to tell you the honest truth, and that truth is that the number is actually <comp> than <guess>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Please stand by. Due to higher than normal call volumes, your guess will be evaluated in. <prosody pitch="-33%"><minutes>.</prosody> Minutes. <audio src=\"https://s3.amazonaws.com/jkoseattle-alexa/holdnew.mp3\" /> Just kidding! My number is <comp>.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': '<break time="2s"/>Sorry, I wasn\'t listening. Please state your guess again.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'Uh, <prosody rate="120%">I changed my mind. It\'s a different number now.</prosody>',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is not lower than the higher value between <guess> and not the lower of the average of <guess> and my number. Not.',
    // 'NextState': constants.states.PLAYING1
  },
  {
    'Phrase': 'My number is lower than <wrong>. <prosody rate="180%">Wait.</prosody> Was that your guess? Sorry tell me again.',
    // 'NextState': constants.states.PLAYING1
  }
];

module.exports = playing2Phrases;
