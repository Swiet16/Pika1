const fs = require("fs");
module.exports.config = {
	name: "babae",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("walang kwenta mga babae")==0 || event.body.indexOf("walang kwenta mga babae")==0 || event.body.indexOf("dapat kinakantot lang mga babae")==0 || event.body.indexOf("dapat kinakantot lang mga babae")==0 || event.body.indexOf("lason mga babae")==0 || event.body.indexOf("lason mga babae")==0 || event.body.indexOf("lason mga babae")==0 || event.body.indexOf("kantotin mga babae")==0 || event.body.indexOf("kantotin mga babae")==0 || event.body.indexOf("lason mga babae")==0 || event.body.indexOf("kasalanan to ng mga babae")==0 || event.body.indexOf("Kasalanan to ng mga babae")==0) {
		var msg = {
				body: "tama ka diyan, tas madame na pokpok ngayon umai🙊",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }