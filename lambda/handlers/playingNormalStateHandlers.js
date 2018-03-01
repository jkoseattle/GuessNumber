'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');
var winner = require('../helpers/winner');
var randomPhrase = require('../helpers/randomPhrase');
var playing0Phrases = require('../data/playing0Phrases');
var playing1Phrases = require('../data/playing1Phrases');
var compareNumber = require ('../helpers/compareNumber');
var getLevelPhrases = require('../helpers/getLevelPhrases');
var getOtherPhrases = require('../helpers/getOtherPhrases');
var selectAnswer = require('../helpers/selectAnswer');

var playingNormalStateHandlers = Alexa.CreateStateHandler(constants.states.PLAYING_NORMAL, {

    'GuessNumber': function () { 
        let guessedNumber = this.event.request.intent.slots.guessedNumber.value; // Number the user guessed
        this.attributes['lastGuessed'] = guessedNumber;

        // DEBUG
        // if (this.attributes['level'] < 4) {
        //     this.attributes['level'] = 4;
        // }

        let phrasesInPlay = getLevelPhrases(this.attributes['level']); // Array of possible phrases for the current level

        //Make sure it's an integer, or else error
        if (guessedNumber == '?' ) {
            this.emitWithState('NotInteger');
        }
        var comparison = compareNumber(this.attributes['chosenNumber'], guessedNumber); // "higher" or "lower" based on guess

        // Pick a phrase at random, put the number of comparison into it
        var answerPhrase = new randomPhrase(phrasesInPlay, this.attributes['usedPhrases'], guessedNumber, comparison); 
        this.attributes['usedPhrases'].push(answerPhrase.Index);
        
        // Change state to some OTHER if NextState exists
        if (answerPhrase.NextState) {
             this.handler.state = answerPhrase.NextState;
             //this.emitWithState('SayName');
         }
        
        var turns = '';
        if (this.attributes['level'] == 0) {
            turns = constants.normalPlayTurns;
        } else {
            turns = constants.turnsPerLevel;
        }
        
        if (this.attributes['level'] == 4) {
            this.attributes['levelCount'] = 0;
            this.attributes['level'] = 0;
            this.attributes['usedPhrases'] = [];
            this.attributes['chosenNumber'] = selectAnswer();
        } else {
            this.attributes['levelCount']++;
            if (this.attributes['levelCount'] >= turns) {
                this.attributes['levelCount'] = 0;
                this.attributes['level']++;
                this.attributes['usedPhrases'] = [];
            }
        }
        
        var rePromptPhrase = new randomPhrase(getOtherPhrases('rePromptPhrases'), '','','')
        this.emit(':ask', answerPhrase.Phrase, rePromptPhrase.Phrase);
    },
    'AMAZON.StopIntent': function () {
        var stopPhrase = new randomPhrase(getOtherPhrases('stopPhrases'), '','',''); 
        this.emit(':tell', stopPhrase.Phrase);
    },
    
    'AMAZON.CancelIntent': function () {
        var stopPhrase = new randomPhrase(getOtherPhrases('stopPhrases'), '','',''); 
        this.emit(':tell', stopPhrase.Phrase);
    },
    
    'SessionEndedRequest': function () {
        this.emit(':tell', 'Session ended');
    },
    
    'AMAZON.HelpIntent': function () {
        var helpPhrase = new randomPhrase(getOtherPhrases('helpPhrases'), '','',''); 
        this.emit(':ask', helpPhrase.Phrase);
    },
    'NotInteger': function () {
        this.emit(':ask', 'Whole numbers only if you please.');
    },
    
    'Unhandled': function () {
        this.emit(':ask', 'I don\'t think that\'s even a number. Try again.');
    }
    
});

module.exports = playingNormalStateHandlers;
