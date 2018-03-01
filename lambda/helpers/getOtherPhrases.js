'use strict';

var stopPhrases = require('../data/stopPhrases');
var rePromptPhrases = require('../data/rePromptPhrases');
var helpPhrases = require('../data/helpPhrases');

module.exports = function getOtherPhrases(aPhraseList) {

  var phrases = {
    'Phrase': 'no phrases',
  };
  switch (aPhraseList) {
    case 'stopPhrases':
      phrases = stopPhrases;
      break;
    case 'helpPhrases':
      phrases = helpPhrases;
      break;
    case 'rePromptPhrases':
      phrases = rePromptPhrases;
      break;
  }

  return phrases;

};
  