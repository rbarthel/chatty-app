import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
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

  chatbarInput(value) {
    const newMessage = {username: this.state.currentUser.name, content: value};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
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
        <ChatBar currentUser={ this.state.currentUser } chatbarInput={ this.chatbarInput.bind(this) } updateName={ this.updateName.bind(this) }/>
      </div>
    );
  }
}
export default App;


