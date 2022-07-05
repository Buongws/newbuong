import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const addTodo = props.addTodoFunc;

  const addTodoFormStyle = {
    display: "flex",
  };

  const addTodoInputStyle = {
    flex: "10",
    padding: "5px",
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
      <input
        type="text"
        name="title"
        placeholder="Add job"
        value={title}
        style={addTodoInputStyle}
        onChange={changeTitle}
      ></input>
      <input type="submit" value="add" className="btn"></input>
    </form>
  );
};

AddTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
