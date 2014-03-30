/**
* @overview AdvTxt-readline is a local readline interface for testing AdvTxt.
*
* @author Nathan Wittstock <code@fardogllc.com>
* @license MIT License - See file 'LICENSE' in this project.
* @version 0.0.2
*/
'use strict';

var readline = require('readline');
var i18n = new (require('i18n-2'))({ locales: ['en']});

var advtxt = {};

/**
 * Constructs a new AdvTxt-readline server
 *
 * @since 0.0.1
 * @constructor
 * @param {advtxt} advtxt - The advtxt instance to be used.
 * @param {object} opt - An object containing options.
 */
exports = module.exports = advtxt.ReadlineClient = function (advtxt, opt) {
	var self = this;
	
	self.playerName = null;
	self.advtxt = advtxt;

	var iface = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	iface.type = 'readline';
	self.listenForCommand(iface);
};


/**
 * Processes text that has come in via the REPL, for testing. Generates a 
 * {command} object.
 *
 * @since 0.0.1
 * @param {string} commandText - The raw text command that was received.
 */
advtxt.ReadlineClient.prototype.processReadline = function (commandText) {
	var self = this;

	var command = {
		command: commandText,
		player: self.playerName,
    replies: [],
		done: function(command) {
      var message = "";
      command.replies.forEach(function (reply) {
        message += reply + " ";
      });
			var messageLength = message.length + 17;
			if (messageLength > 140) messageLength = "!!!" + messageLength + "!!!";
			console.log(message + '(' + messageLength + ')');
		}
	};

	self.advtxt.processCommand(command);
};

/**
 * Listens for commands on the interface provided.
 *
 * @since 0.0.1
 * @param {interface} interface - The interface object that should be watched.
 */
advtxt.ReadlineClient.prototype.listenForCommand = function (iface) {
	var self = this;
	// if it's readline, we'll never see more than one player, so make the name 
	// of that user globally known
	if (iface.type === 'readline') {
		iface.question("What is your username? ", function(username) {
			self.playerName = username;
			iface.on('line', self.processReadline.bind(self));
		});
	}
};

