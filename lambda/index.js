'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants/constants');

// Handlers
var onboardingStateHandlers = require('./handlers/onboardingStateHandlers');
var playingNormalStateHandlers = require('./handlers/playingNormalStateHandlers');
var nameStateHandlers = require('./handlers/nameStateHandlers');
var yesNoStateHandlers = require('./handlers/yesNoStateHandlers');
var penguinsStateHandlers = require('./handlers/penguinsStateHandlers');
var thirtyEightStateHandlers = require('./handlers/thirtyEightStateHandlers');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
  
    alexa.registerHandlers(
        onboardingStateHandlers,
        playingNormalStateHandlers,
        nameStateHandlers,
        yesNoStateHandlers,
        penguinsStateHandlers,
        thirtyEightStateHandlers
    );

    alexa.execute();

};