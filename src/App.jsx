import React, { Component } from 'react';
import Navbar from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar from './Chatbar.jsx'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: { name: "Anonymous" },
            messages: [],
            usersOnline: 0
        };

    };

    componentDidMount() {

        this.socket = new WebSocket("ws://localhost:3001");

        console.log("componentDidMount <App />");
        // Optional delayed message using setTimeout()
        // setTimeout(() => {
        //     console.log("Simulating incoming message");
        //     // Add a new message to the list of messages in the data store
        //     const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
        //     const messages = this.state.messages.concat(newMessage)
        //     // Update the state of the app component.
        //     // Calling setState will trigger a call to render() in App and all child components.
        //     this.setState({ messages: messages })
        // }, 3000);

        // on receiving messages from server, sorts into different message types
        this.socket.onmessage = (msg) => {
            const receivedMsg = JSON.parse(msg.data);
            const oldMessages = this.state.messages;
            const newMessages = [...oldMessages, receivedMsg];

            switch (receivedMsg.type) {
                case "incomingMessage":

                    this.setState({ messages: newMessages });

                    break;
                case "incomingNotification":

                    this.setState({ messages: newMessages });

                    break;
                case "userCount":
                    this.setState({ usersOnline: receivedMsg.content });

                    break;
                default:
                    // show an error in the console if the message type is unknown
                    throw new Error("Unknown event type " + msg.type);
            };
        };
    };

    // sends new messages to server
    addMessage = (newContent) => {
        const newMessage = {
            type: "postMessage",
            username: this.state.currentUser.name,
            content: newContent
        };
        this.socket.send(JSON.stringify(newMessage));

    };

    // updates the username and sends notification to server
    updateUser = (newName) => {
        const newUsername = {
            name: newName
        };
        const oldName = this.state.currentUser.name;
        const nameNotification = {
            type: "postNotification",
            content: `${oldName} changed their name to ${newUsername.name}`
        }
        this.setState({ currentUser: newUsername });
        this.socket.send(JSON.stringify(nameNotification));

    };

    render() {
        return (
            <div>
        <Navbar usersOnline={this.state.usersOnline} />
        <MessageList messages={this.state.messages} userColor={this.state.userColor} />
        <Chatbar currentUser={this.state.currentUser} addMessage={this.addMessage} updateUser={this.updateUser} />
      </div>
        );
    };
};

export default App;