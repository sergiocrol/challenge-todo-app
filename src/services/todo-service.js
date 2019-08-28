import axios from 'axios';

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    })
  }

  newTodo(todo) {
    const { title, body, type } = todo;
    return this.todo.post('/todos', { title, body, type })
      .then(({ data }) => data)
  }

  getTodos() {
    return this.todo.get('/todos')
      .then(({ data }) => data)
  }

  removeTodo(id) {
    return this.todo.delete(`/todos/${id}`)
      .then(({ data }) => data)
  }

}

const todo = new Todo();

export default todo;