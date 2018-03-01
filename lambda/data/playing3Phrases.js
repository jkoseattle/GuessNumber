'use strict';

var constants = require('../constants/constants');

var playing3Phrases = [
  {   
    'Phrase': 'Oh I forgot to ask you. Please tell me your first name.',
    'NextState': constants.states.NAME
  },
  {   
    'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/marianew.mp3" />  I'm sorry were you still playing? I forgot the number. Um, ok I have a new one. Go ahead.`,
    //'NextState': constants.states.YESNO
  },
  {   
    'Phrase': 'I know, let\'s play a different game. <prosody pitch="-33%">Would you like to play Global Epic Warfare Battle 5, Ultimate Edition?</prosody>',
    'NextState': constants.states.YESNO
  },
  {   
    'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/sighnew.mp3" />This is taking forever. OK I'll give you a hint. If you subtract twelve from my number, then add six, and add six again, the result will be my number. So can you guess it now?`,
    //'NextState': constants.states.THIRTYEIGHT
  },
  {   
    'Phrase': `Oh hey, while we're guessing numbers, I wanted to ask you, do you like penguins?`,
    'NextState': constants.states.PENGUINS
  }
];

module.exports = playing3Phrases;
