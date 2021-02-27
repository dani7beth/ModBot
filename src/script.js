import React from "react";
import { MessageLog } from "./Component/MessageLog";
const tmi = require("tmi.js");
class Script extends React.Component {
  constructor(msgLog) {
    super(msgLog);
    console.log(msgLog);
    this.opts = {
      connection: {
        secure: true,
      },
      identity: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_OATH_CODE,
      },
      channels: [process.env.REACT_APP_CHANNEL],
      messages: msgLog,
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

  handleDisconnect() {
    console.log("disconnected");
    this.opts.messages.push("Disconnected from server");
  }

  //handler functions
  handleConnect(addr) {
    console.log(`Connected to ${addr}`);
    this.opts.messages.push("Connected to Server");
  }

  handleRaid(channel, username, viewers) {
    // console.log(`${username} raided the channel with ${viewers} viewers!`);
    this.opts.messages.push(
      `${username} raided the channel with ${viewers} viewers!`
    );
    // console.log(this.msgLog);
    // setTimeout(() => {
    //   client.say(channel, `!so @${username}`);
    // }, Math.floor(Math.random() * 5000));
  }

  handleSub(channel, username) {
    // console.log(`${username} just subbed!`);
    this.opts.messages.push(`${username} just subbed!`);
    // console.log(this.msgLog);
    // setTimeout(() => {
    //   client.say(channel, "!sh");
    // }, Math.floor(Math.random() * 5000));
  }

  handleMessage(channel, user, message, self) {
    this.opts.messages.push(message);    
  }
  printLog() {
    return this.opts.messages.map((item) => {
      return <p>{item}</p>;
    });
  }

  //event handlers
  handler() {
    this.client.on("connected", this.handleConnect);
    this.client.on('connected', this.printLog);
    this.client.on("disconnect", this.handleDisconnect);
    this.client.on("raided", this.handleRaid);
    this.client.on("resub", this.handleSub);
    this.client.on("subgift", this.handleSub);
    // this.client.on("submysterygift", this.handleSub);
    this.client.on("subscription", this.handleSub);
    this.client.on("message", this.handleMessage);
  }
}
export default Script;
