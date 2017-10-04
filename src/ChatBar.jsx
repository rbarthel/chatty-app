import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  contentInput(event) {
    if (event.key === 'Enter') {
      this.props.chatbarInput(event.target.value);
      event.target.value = '';
    }
  }

  nameInput(event) {
    this.props.updateName(event.target.value);
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder='Your Name: (Optional)' onBlur={ this.nameInput.bind(this) }/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER - To add an image paste the URL" onKeyUp={ this.contentInput.bind(this) } />
      </footer>
    )
  }
}
export default ChatBar;
