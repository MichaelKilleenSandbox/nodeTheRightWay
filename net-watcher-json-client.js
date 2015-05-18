/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
"use strict";
const
  net = require('net'),
  client = net.connect({port: 5432});
client.on('data', function(data) {
  let message = JSON.parse(data);
  if (message.type === 'watching') {
    console.log("Now watching: " + message.file);
  } else if (message.type === 'changed') {
    let date = new Date(message.timestamp);
    console.log("File '" + message.file + "' changed at " + date);
  } else {
    throw Error("Unrecognized message type: " + message.type);
  }
});

http://localhost:8080/wss-common-webparts/mvc/ebn/vbaClaimStatusSummary
https://vaiidweb1.fe-works.com/wss-common-webparts-8.0/mvc/ebn/vbaClaimStatusSummary

Unexpected Error

We're sorry, but an unexpected error has occurred. Please return to the main site and try again.

Customer Support Information:

Error ID: 1431107699469

Error Code: AUTH_ACCOUNT_CREATION_FAILURE

Server ID: vapii_dev_02

VsoDataSourceConfig
AccountCreationListener
LoginSimulatorPageFactory
WssCommonSpringProfiles