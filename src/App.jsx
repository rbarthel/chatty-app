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
      messages: [
        {
          username: "System",
          content: "Welcome to Chatty App!",
        }
      ]
    }
  }

  componentDidMount() {
    this.socket.onmessage = (event) => {
      const messages = this.state.messages.concat(JSON.parse(event.data));
      console.log(this);
      this.setState({messages: messages})
    }
  }

  //send user input to websocket server
  chatbarInput(value) {
    const newMessage = {username: this.state.currentUser.name, content: value};
    this.socket.send(JSON.stringify(newMessage));
  }

  updateName(value) {
    value === '' ? name = 'Anonymous' : name = value;
    this.setState({currentUser: {name: name}})
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={ this.state.messages } />
        <ChatBar currentUser={ this.state.currentUser } chatbarInput={ this.chatbarInput.bind(this) } updateName={ this.updateName.bind(this) /*pass as object*/}/>
      </div>
    );
  }
}
export default App;


