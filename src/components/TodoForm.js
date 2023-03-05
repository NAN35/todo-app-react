import React, { useState,useEffect,useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef('');

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange = (e) =>{
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input
    })
    setInput("")
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
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
    </form>
  );
}

export default TodoForm;
