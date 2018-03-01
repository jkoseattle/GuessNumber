'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');
var randomPhrase = require('../helpers/randomPhrase');
var welcomePhrases = require('../data/welcomePhrases');
var rePromptPhrases = require('../data/rePromptPhrases');
var getLevelPhrases = require('../helpers/getLevelPhrases');
var getOtherPhrases = require('../helpers/getOtherPhrases');
var selectAnswer = require('../helpers/selectAnswer');

var onboardingStateHandlers = Alexa.CreateStateHandler(constants.states.ONBOARDING, {

    'NewSession': function () {

        // Alexa picks number from 1-100
        var chosenNumber = selectAnswer();

        this.attributes['chosenNumber'] = chosenNumber;
        this.attributes['levelCount'] = 0;
        this.attributes['level'] = -1;
        this.attributes['usedPhrases'] = [];
        
        // Get Welcome phrase
        var levelPhrases = getLevelPhrases(this.attributes['level']);
        // this.emit(':tell', levelPhrases.length);
        
        var welcomePhrase = randomPhrase(levelPhrases,'',''); 
        // this.emit(':ask', randomPhrase(welcomePhrase.Phrase));
        
        this.attributes['level'] = 0;
        this.handler.state = constants.states.PLAYING_NORMAL;

        var rePromptPhrase = new randomPhrase(getOtherPhrases('rePromptPhrases'), '','',''); 
        this.emit(':ask', `${welcomePhrase.Phrase}`, rePromptPhrase.Phrase);
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', `${this.attributes['chosenNumber']}. Stop intent`);
    },
    
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Cancel intent');
    },
    
    'SessionEndedRequest': function () {
        this.emit(':tell', 'Session ended');
    },
    
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Help intent');
    },
    
    'Unhandled': function () {
        this.emitWithState('AMAZON.HelpIntent');
    }
    
    
});

module.exports = onboardingStateHandlers;

