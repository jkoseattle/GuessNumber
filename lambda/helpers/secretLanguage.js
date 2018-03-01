'use strict';

module.exports = function secretLanguage() {

  var word = '';
  //var consonants = 'bcdfghjklmnprqstvwxz';
  var consonants = new Array('b','d','dZ','D','f','g','h','j','k','l','m','n','N','p','r\\','s','S','t','tS','T','v','w','z');
  // var vowels = 'aeiouy';
  var vowels = new Array('@','@`','{','aI','aU','A','eI','3`','E','i','I','oU','O','OI','u','U','V');
  var letterList = '';

  for (let i = 0; i < 9; i++) {
    letterList = consonants;
    let rand = Math.random();
    if (rand > 0.6) {
      letterList = vowels;
    }
    let whichLetter = Math.floor(Math.random() * letterList.length);
    word = word + letterList[whichLetter];
  }

  // var word = 'testword';
  return word;
};
  
