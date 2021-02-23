const tmi = require("tmi.js");
require("dotenv");
const log = [];

const opts = {
  identity: {
    username: process.env.USER,
    password: process.env.OATH_CODE,
  },
  channels: [process.env.CHANNEL],
};

const client = new tmi.client(opts);

//connect to twitch
client.connect();

//handler functions
const handleConnect = (addr) => {
  console.log(`Connected to ${addr}`);
  log.push(`Connected to ${addr}`);
};

const handleRaid = (channel, username, viewers) => {
  console.log(`${username} raided the channel with ${viewers} viewers!`);
  log.push(`${username} raided the channel with ${viewers} viewers!`);
  setTimeout(() => {
    client.say(channel, `!so @${username}`);
  }, Math.floor(Math.random() * 5000));
};

const handleSub = (channel, username) => {
  console.log(`${username} just subbed!`);
  log.push(`${username} just subbed!`)
  // setTimeout(() => {
  //   client.say(channel, "!sh");
  // }, Math.floor(Math.random() * 5000));
};

//event handlers
client.on("connected", handleConnect);
client.on("raided", handleRaid);
client.on("resub", handleSub);
client.on("subgift", handleSub);
client.on("submysterygift", handleSub);
client.on("subscription", handleSub);
