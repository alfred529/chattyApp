import React, { Component } from 'react';

function Chatbar(props) {

    const currentUser = props.currentUser;

    const onKeyPress = event => {
        if (event.key === "Enter") {
            console.log(props);
            props.addMessage(event.target.value);
            event.target.value = '';
        }
    }

    const onUsernamePress = event => {
        if (event.key === "Enter") {
            console.log(props);
            props.updateUser(event.target.value);
        }
    }

    return (
        <div>
      <footer className="chatbar">
        <input defaultValue={currentUser.name} className="chatbar-username" placeholder="User name (optional)" onKeyPress={onUsernamePress} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={onKeyPress} />
      </footer>
      </div>
    );

}
export default Chatbar;