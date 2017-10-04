import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      URLcheck: new RegExp('(http\\S*.(jpg|png|gif))')
    }
  }

  renderContent(content) {
    let renderedContent = content;
    if (renderedContent.match(this.state.URLcheck)) {
      this.state.img = renderedContent.match(this.state.URLcheck)[0];
      renderedContent = renderedContent.replace(this.state.URLcheck, '');
    }
    return renderedContent;
  }

  render() {
    return (
      <div className={ this.props.message.type === 'incomingMessage' ? 'message' : 'message system' } >
        <span className="message-username" style={{color: this.props.message.color}}>{ this.props.message.username }</span>
        <span className="message-content">
          { this.renderContent(this.props.message.content) }
          <br /><img src={this.state.img} style={{'maxWidth': '60%'}} />
        </span>
      </div>
    )
  }
}
export default Message;
