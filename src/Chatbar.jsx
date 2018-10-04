import React, { Component } from 'react';

function Chatbar(props) {

    const currentUser = props.currentUser;

    // when the user presses enter after typing a message
    const onKeyPress = event => {
        if (event.key === "Enter") {
            props.addMessage(event.target.value);
            event.target.value = '';
        }
    }

    // when the users changes their name and presses enter
    const onUsernamePress = event => {
        if (event.key === "Enter") {
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