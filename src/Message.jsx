import React, { Component } from 'react';

function Messages(props) {

    if (props.type === "incomingMessage") {
        return (
            <div className="message">
          <span className="message-username">{props.username}</span>
          <span className="message-content">{props.content}</span>
        </div>
        );
    } else if (props.type === "incomingNotification") {
        return (
            <div className="message system">
          <span className="message-content">{props.content}</span>
        </div>
        );
    }

}
export default Messages;