import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={ this.props.data.messages } />
        <ChatBar currentUser={ this.props.data.currentUser } />
      </div>
    );
  }
}
export default App;


