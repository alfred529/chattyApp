import React, { Component } from 'react';

function Navbar(props) {

    return (
        <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="navbar-userCount">{props.usersOnline} users online</span>
      </nav>
      </div>

    );

}
export default Navbar;