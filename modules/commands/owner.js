module.exports.config = {
	name: "owner",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("sino owner neto")==0 || event.body.indexOf("botowner")==0 || event.body.indexOf("bot owner")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("sino owner mo")==0 || event.body.indexOf("sino owner mo")==0 || event.body.indexOf("sino owner")==0 || event.body.indexOf("sino owner nito")==0 || event.body.indexOf("sino owner mo bot")==0 || event.body.indexOf("owner")==0 ) { 
		var msg = {
				body: `My owner is Erythel Vior thankyou for using my bot have fun using it.🫶`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
