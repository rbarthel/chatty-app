import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="messages">
        {
          this.props.messages.map((message, i) => {
            return <Message message={ message } key={ i } />
          })
        }
      </main>
    )
  }
}
export default MessageList;


