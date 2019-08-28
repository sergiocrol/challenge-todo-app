import React, { Component } from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';


class Home extends Component {
  state = {
    todoList: [],
    showForm: false
  }

  showForm = () => {
    const updateShowForm = !this.state.showForm;
    this.setState({
      showForm: updateShowForm
    })
  }

  render() {
    const { todoList, showForm } = this.state;
    const displayForm = showForm ? '' : 'u-display-none';

    return (
      <div className="container">
        <Header />
        <div className="todo-list-container">
          {
            todoList.length ? (
              <p>One item</p>
            ) : (
                <p>No items</p>
              )
          }
        </div>
        <div className={`form-container u-margin-bottom-medium ${displayForm}`}>

          <span className="triangle"></span>
        </div>
        <Nav showForm={this.showForm} />
      </div>
    )
  }
}

export default Home;