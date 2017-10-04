import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Anonymous"},
      onlineUsers: 0,
      messages: [
        {
          type: "notification",
          content: "Welcome to Chatty App!",
          id: "7822da40-a88b-11e7-82dc-794fd3c032d1"
        }
      ]
    }
  }

  componentDidMount() {
    this.socket.onmessage = (event) => {
      const fromServer = JSON.parse(event.data);

      if (fromServer.type === 'onlineUsers') {
        this.setState({onlineUsers: fromServer.onlineUsers});
      } else if (fromServer.type === 'incomingMessage' || fromServer.type === 'incomingNotification' ) {
        const messages = this.state.messages.concat(fromServer);
        this.setState({messages: messages})
      }
    }
  }

  //send user input to websocket server
  chatbarInput(value) {
    const newMessage = {type: 'postMessage', username: this.state.currentUser.name, content: value};
    this.socket.send(JSON.stringify(newMessage));
  }

  updateName(value) {
    value === '' ? name = 'Anonymous' : name = value;
    const changedName = {type: 'postNotification', content: `${this.state.currentUser.name} changed their name to ${name}`};
    this.socket.send(JSON.stringify(changedName));
    this.setState({currentUser: {name: name}})
  }

  render() {
    return (
      <div>
        <NavBar onlineUsers={ this.state.onlineUsers } />
        <MessageList messages={ this.state.messages } />
        <ChatBar chatbarInput={ this.chatbarInput.bind(this) } updateName={ this.updateName.bind(this) }/>
      </div>
    );
  }
}
export default App;


