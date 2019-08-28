import React, { Component } from 'react';
import todo from '../services/todo-service.js';

class Nav extends Component {

  showForm = () => {

  }

  render() {
    return (
      <div className="navbar-container">
        <a className="new-todo-button" href="#0" onClick={this.props.showForm}>+</a>
      </div>
    )
  }
}

export default Nav;
