import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.message.type === 'incomingMessage' ? 'message' : 'message system' } >
        <span className="message-username" style={{color: this.props.message.color}}>{ this.props.message.username }</span>
        <span className="message-content">{ this.props.message.content }</span>
      </div>
    )
  }
}
export default Message;
