const tmi = require("tmi.js");
class Script {
  constructor() {
    this.msgLog = [];
    this.opts = {
      connection: {
        secure: true,
      },
      identity: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_OATH_CODE,
      },
      channels: [process.env.REACT_APP_CHANNEL],
    };
    this.client = new tmi.client(this.opts);
  }

  //connect to twitch
  connection() {
    this.client.connect().catch(console.error);
  }
  disconnect() {
    this.client.disconnect();
  }
  
  //handler functions
  handleConnect(addr) {
    console.log(this.msgLog)
    console.log(`Connected to ${addr}`);
    // this.msgLog.push(`Connected to ${addr}`);
    if (this.msgLog) {
      this.msgLog.push("Connected to the server");
    }
  }

  handleRaid(channel, username, viewers) {
    console.log(`${username} raided the channel with ${viewers} viewers!`);
    this.msgLog.push(`${username} raided the channel with ${viewers} viewers!`);
    // setTimeout(() => {
    //   client.say(channel, `!so @${username}`);
    // }, Math.floor(Math.random() * 5000));
  }

  handleSub(channel, username) {
    console.log(`${username} just subbed!`);
    this.msgLog.push(`${username} just subbed!`);
    // setTimeout(() => {
    //   client.say(channel, "!sh");
    // }, Math.floor(Math.random() * 5000));
  }

  //event handlers
  handler() {
    this.client.on("connected", this.handleConnect);
    this.client.on("raided", this.handleRaid);
    this.client.on("resub", this.handleSub);
    this.client.on("subgift", this.handleSub);
    this.client.on("submysterygift", this.handleSub);
    this.client.on("subscription", this.handleSub);
  }
}
export default Script;
