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


var nameStateHandlers = Alexa.CreateStateHandler(constants.states.NAME, {

    'SayName': function () { 
        let firstName = this.event.request.intent.slots.firstName.value; // Number the user guessed
        let phrasesInPlay = getLevelPhrases(this.attributes['level']); // Array of possible phrases for the current level

        // Change state back
        this.handler.state = constants.states.PLAYING_NORMAL;
        
        var turns = '';
        if (this.attributes['level'] == 0) {
            turns = constants.normalPlayTurns;
        } else {
            turns = constants.turnsPerLevel;
        }
        
        var answerPhrase = `${firstName}. ${firstName}. I'm probably not gonna remember that. Now please tell me your blood type. Oh never mind let's just keep playing. Next guess?`;
        var rePromptPhrase = new randomPhrase(getOtherPhrases('rePromptPhrases'), '','','')
        this.emit(':ask', answerPhrase, rePromptPhrase.Phrase);
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
        this.emit(':ask', 'what\'s your name');
    }
    
});

module.exports = nameStateHandlers;
