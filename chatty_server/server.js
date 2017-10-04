const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

const colors = ['#fb6727', '#42d0c4', '#3ab074', '#c6d77b'];

function sendOnlineUsers() {
  console.log('client(s) connected:', wss.clients.size);
  const onlineUsers = { type: 'onlineUsers', onlineUsers: wss.clients.size };
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(onlineUsers));
  });
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {

  sendOnlineUsers();



  ws.on('message', function incoming(messageIn) {

    const messageOut = JSON.parse(messageIn);

    if (messageOut.type === 'colorRequest') {
      const colorNum = Math.floor((Math.random() * 4));
      console.log('chose colour:', colorNum);
      ws.send(JSON.stringify({type: 'colorAssignment', color: colors[colorNum]}));
    }

    messageOut.id = uuidv1();

    if (messageOut.type === 'postMessage') {
      console.log('sending user message');
      messageOut.type = 'incomingMessage';
    } else {
      console.log('sending system notification');
      messageOut.type = 'incomingNotification';
      messageOut.color = 'black';
    }

    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(messageOut));
    });

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    sendOnlineUsers();
  });
});