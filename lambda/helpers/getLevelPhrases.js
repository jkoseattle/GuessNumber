'use strict';

var playing0Phrases = require('../data/playing0Phrases');
var playing1Phrases = require('../data/playing1Phrases');
var playing2Phrases = require('../data/playing2Phrases');
var playing3Phrases = require('../data/playing3Phrases');
var playing4Phrases = require('../data/playing4Phrases');
var welcomePhrases = require('../data/welcomePhrases');

module.exports = function getLevelPhrases(level) {

  var phrases = {
    'Phrase': 'no phrases',
  };
  switch (level) {
    case -1:
      phrases = welcomePhrases;
      break;
    case 0:
      phrases = playing0Phrases;
      break;
    case 1:
      phrases = playing1Phrases;
      break;
    case 2:
      phrases = playing2Phrases;
      break;
    case 3:
      phrases = playing3Phrases;
      break;
    case 4:
      phrases = playing4Phrases;
      break;
      
    }
    
  return phrases;

};
  