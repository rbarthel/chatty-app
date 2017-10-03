import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={ 'Your Name: ' + (this.props.currentUser.name ? this.props.currentUser.name : 'Anonymous') } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}
export default ChatBar;
