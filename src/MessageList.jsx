import React, {Component} from 'react';
import Message from './Message.jsx'

function MessageList(props) {

    const messages = props.messages

    const messList = messages.map((message) => {
      return <Message key={message.id} username={message.username} content={message.content}/>
    });


    return (
      <div>
      <main className="messages">
        {messList}
      </main>
      </div>
    );

}
export default MessageList;



