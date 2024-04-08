const fs = require("fs");
module.exports.config = {
	name: "bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "killua", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot")==0 || (event.body.indexOf("Bot")==0 || (event.body.indexOf("BOT")==0 || (event.body.indexOf("sev")==0)))) {
		var msg = {
				body: "I'm here senpai."
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
