import React from 'react'

const Todo = (props) => {
  const { type, body, title, _id } = props.content;

  return (
    <div className="todo-card u-margin-top-small">
      <span className={`dot-${type} u-margin-right-small`}></span>
      <div className="todo-card-body">
        <p className="todo-card-body-title">{title}</p> <span className="separator"> - </span>
        <p>{body}</p>
      </div>
      <div className="todo-card-action">
        <a href="#0" onClick={() => { props.removeTodo(_id) }}>delete</a>
        {/* <a href="#0">update</a> */}
      </div>
    </div>
  )
}

export default Todo;
