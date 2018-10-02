import React, { Component } from 'react';
import Navbar from './Navbar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar from './Chatbar.jsx'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: { name: "Anonymous" },
            messages: [{
                    username: "Anonymous1",
                    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
                    id: 1
                },
                {
                    username: "Anonymous2",
                    content: "Yes I think you got it.",
                    id: 2
                }
            ]
        }

      this.addMessage = this.addMessage.bind(this);
    }



    componentDidMount() {

        var exampleSocket = new WebSocket("ws://localhost:3001");

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
    }


    addMessage(newContent) {
        const newMessage = {
            username: "Anonymous3",
            content: newContent,
            id: Math.random()
        };
        const oldMessages = this.state.messages;
        const newMessages = [...oldMessages, newMessage];
        this.setState({ messages: newMessages });
    }


    render() {
        return (
            <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <Chatbar currentUser={this.state.currentUser} addMessage={this.addMessage} />
      </div>
        );
    }
}
export default App;