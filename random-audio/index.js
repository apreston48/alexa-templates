var audioFiles = ["<audio src='https://s3.amazonaws.com/my-ssml-samples/Flourish.mp3' />","<audio src='https://s3.amazonaws.com/my-ssml-samples/cheap_thrills.mp3' />","<audio src='https://s3.amazonaws.com/my-ssml-samples/Flourish.mp3' />"];  // Array of items

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // exa.appId = 'amzn1.ask.skill.1234';

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('StartEngineIntent');
    },

    'StartEngineIntent': function () {
            var fileIndex = Math.floor(Math.random() * audioFiles.length);
            var randomFile = audioFiles[fileIndex];
            this.emit(':ask',randomFile, 'try again');

    }
};
