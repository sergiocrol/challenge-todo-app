import React, { Component } from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Todo from '../components/Todo';

import todo from '../services/todo-service.js';


class Home extends Component {
  state = {
    todoList: [],
    showForm: false,
    title: '',
    body: '',
    type: 'misc'
  }

  componentDidMount() {
    todo.getTodos()
      .then(todos => {
        this.setState({
          todoList: todos
        })
      })
  }

  showForm = () => {
    const updateShowForm = !this.state.showForm;
    this.setState({
      showForm: updateShowForm
    })
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveTodo = () => {
    this.showForm();
    const { title, body, type, todoList } = this.state;
    const todoObject = { title, body, type };
    todo.newTodo(todoObject)
      .then(todo => {
        const newTodoList = [...todoList];
        newTodoList.push(todo);
        this.setState({
          todoList: newTodoList
        })
      })
  }

  removeTodo = (id) => {
    todo.removeTodo(id)
      .then(todo => {
        this.componentDidMount()
      })
  }

  prevent = (event) => {
    event.preventDefault();
    this.saveTodo();
  }

  render() {
    const { todoList, showForm, title, body, type } = this.state;
    const displayForm = showForm ? '' : 'u-display-none';

    return (
      <div className="container">
        <Header />
        <div className="todo-list-container">
          {
            todoList.length ? (
              todoList.map(el => {
                return <Todo key={el._id} content={el} removeTodo={this.removeTodo} />
              })
            ) : (
                <p>No items</p>
              )
          }
        </div>
        <div className={`form-container u-margin-bottom-medium ${displayForm}`}>
          <div className="form-body">
            <h2>+add new todo+</h2>
            <form>
              <label htmlFor="title">title</label>
              <input id="title" name="title" type="text" value={title} onChange={this.handleInput} />
              <label htmlFor="body">content</label>
              <input id="body" name="body" type="text" value={body} onChange={this.handleInput} />
              <label htmlFor="type">type</label>
              <select id="type" name="type" value={type} onChange={this.handleInput}>
                <option>misc</option>
                <option>job</option>
                <option>studies</option>
              </select>
              <button className="u-margin-top-small" type="submit" onClick={this.prevent}>add</button>
            </form>
          </div>
          <span className="triangle"></span>
        </div>
        <Nav showForm={this.showForm} />
      </div>
    )
  }
}

export default Home;