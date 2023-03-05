import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <React.Fragment>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input edit"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-button edit">Update</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
        </React.Fragment>
      )}
    </form>
  );
}

export default TodoForm;
