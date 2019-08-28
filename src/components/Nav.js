import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <a className="new-todo-button" href="#0" onClick={this.props.showForm}>+</a>
      </div>
    )
  }
}

export default Nav;
