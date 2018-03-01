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


var penguinsStateHandlers = Alexa.CreateStateHandler(constants.states.PENGUINS, {

    'YesIntent': function () { 
        // Change state back
        this.handler.state = constants.states.PLAYING_NORMAL;
        
        var turns = '';
        if (this.attributes['level'] == 0) {
            turns = constants.normalPlayTurns;
        } else {
            turns = constants.turnsPerLevel;
        }
        
        var answerPhrase = `Noted. What's your next guess.`;
        var rePromptPhrase = new randomPhrase(getOtherPhrases('rePromptPhrases'), '','','')
        this.emit(':ask', answerPhrase, rePromptPhrase.Phrase);
    },
    'NoIntent': function () { 
        // Change state back
        this.handler.state = constants.states.PLAYING_NORMAL;
        
        var turns = '';
        if (this.attributes['level'] == 0) {
            turns = constants.normalPlayTurns;
        } else {
            turns = constants.turnsPerLevel;
        }
        
        var answerPhrase = `Why not? you know what, it's fine, really. Whatever. Let's just keep playing.`;
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
        this.emit(':ask', 'I said, do you like penguins.');
    }
    
});

module.exports = penguinsStateHandlers;
