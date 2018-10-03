import React, { Component } from 'react';
import Navbar from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar from './Chatbar.jsx'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: { name: "Anonymous" },
            messages: []
        }

    }



    componentDidMount() {

        this.socket = new WebSocket("ws://localhost:3001");

        console.log("componentDidMount <App />");
        setTimeout(() => {
            console.log("Simulating incoming message");
            // Add a new message to the list of messages in the data store
            const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
            const messages = this.state.messages.concat(newMessage)
            // Update the state of the app component.
            // Calling setState will trigger a call to render() in App and all child components.
            this.setState({ messages: messages })
        }, 3000);

        this.socket.onmessage = (msg) => {
            const receivedMsg = JSON.parse(msg.data);
            // console.log("Parsed message from server: ", receivedMsg);
            const oldMessages = this.state.messages;
            const newMessages = [...oldMessages, receivedMsg];
            this.setState({ messages: newMessages });
        }

    }


    addMessage = (newContent) => {
        const newMessage = {
            username: "Anonymous3",
            content: newContent
            // id: Math.random() // id now being generated on server side
        };
        // const oldMessages = this.state.messages;
        // const newMessages = [...oldMessages, newMessage];
        // this.setState({ messages: newMessages });
        this.socket.send(JSON.stringify(newMessage));

    }

    updateUser = (newName) => {
        const newUsername = {
            name: newName
        };
        this.setState({currentUser: newUsername});

    }

    render() {
        return (
            <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <Chatbar currentUser={this.state.currentUser} addMessage={this.addMessage} updateUser={this.updateUser} />
      </div>
        );
    }
}
export default App;