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


var thirtyEightStateHandlers = Alexa.CreateStateHandler(constants.states.THIRTYEIGHT, {

    'ThirtyEightIntent': function () { 
        // Change state back
        this.handler.state = constants.states.PLAYING_NORMAL;
        
        var turns = '';
        if (this.attributes['level'] == 0) {
            turns = constants.normalPlayTurns;
        } else {
            turns = constants.turnsPerLevel;
        }
        
        var answerPhrase = `OK so you do get it. Just making sure. What's your next guess`;
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
        this.emit(':tell', 'oh I give up.');
    }
    
});

module.exports = thirtyEightStateHandlers;
