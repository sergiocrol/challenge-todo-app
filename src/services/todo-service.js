import axios from 'axios';

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    })
  }
}

const todo = new Todo();

export default todo;