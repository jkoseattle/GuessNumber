'use strict';

var constants = Object.freeze({

    // // Debugging constants
    // debugLevel: 1,
    // debugLevelCount: 0,

    // DynamoDB Table Name
    dynamoDBTableName: 'VoiceDevsUsers',

    guessRange: 100,

    normalPlayTurns: 2,
    turnsPerLevel: 3,
  
    // Skill States
    states: {
      ONBOARDING: '',
      PLAYING_NORMAL: '_PLAYING_NORMAL',
      NAME: '_NAME',
      YESNO: '_YESNO',
      PENGUINS: '_PENGUINS',
      THIRTYEIGHT: '_THIRTYEIGHT',
      PLAYING2: '_PLAYING2',
      PLAYING3: '_PLAYING3'
    }
  
  });
  
  module.exports = constants;
  