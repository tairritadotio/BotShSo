const tmi = require('tmi.js');
const dotenv = require('dotenv');
const { Console } = require('console');

dotenv.config();

const TWITCH_BOT_USERNAME = process.env.BOT_USERNAME;
const TWITCH_OAUTH_TOKEN = process.env.OAUTH_TOKEN;
const TWITCH_CHANNEL_NAME = process.env.CHANNEL_NAME.split(',');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: TWITCH_BOT_USERNAME,
		password: TWITCH_OAUTH_TOKEN //https://twitchapps.com/
	},
	channels: [ TWITCH_CHANNEL_NAME ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
});



client.on("join", (channel, username, self) => {
    if(self) {
      client.say(channel,"Olá pessoas, eu sou um dos bots do Tairritadotio, estou aqui apenas para mandar ShSO automaticos porque o streamer tem preguiça. ;D");
      }
  });

      


client.on('join', (channel, username, self) => {
  let streamers = [
  'kaduzius',
  'tairritadotio',
];

  if(streamers.includes(username)) {
  
        client.say(client.channels[0], `!sh-so @${username}`);
  }
});
