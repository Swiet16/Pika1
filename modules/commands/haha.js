const fs = require("fs");
module.exports.config = {
	name: "haha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "haha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("HAHAHAHAHAHAHAHAHA")==0 || event.body.indexOf("HAHAHAHAHHAAHHAHAHA")==0 || event.body.indexOf("HAHAHAHA")==0 || event.body.indexOf("hahahahahahahah")==0 || event.body.indexOf("hahahaha")==0 || event.body.indexOf("haha")==0 || event.body.indexOf("hahahaha")==0 || event.body.indexOf("hahaha")==0 || event.body.indexOf("hahahahahahahahaha")==0 || event.body.indexOf("AHAHHAHAHAHAHAHHAHAHAHAHAHHAHHAHHAH")==0 || event.body.indexOf("hahahahahahahahahahahah")==0 || event.body.indexOf("haha")==0) {
		var msg = {
				body: "happy?🙄",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }