const fs = require("fs");
module.exports.config = {
	name: "mura",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "mura",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bobo")==0 || event.body.indexOf("Bobo")==0 || event.body.indexOf("Tanginamo")==0 || event.body.indexOf("hayop")==0 || event.body.indexOf("tanginamoka")==0 || event.body.indexOf("tangina")==0 || event.body.indexOf("gago")==0 || event.body.indexOf("umai")==0 || event.body.indexOf("nyeta")==0 || event.body.indexOf("puta")==0 || event.body.indexOf("pota")==0 || event.body.indexOf("depota")==0) {
		var msg = {
				body: "ang pogi ng owner ko promise🤗",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }