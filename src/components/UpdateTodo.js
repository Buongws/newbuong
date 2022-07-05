import React, { useState } from "react";
import PropTypes from "prop-types";

const UpdateTodo = (props) => {
  const [title, setTitle] = useState("");

  const UpdateTodo = props.addTodoFunc;

  const UpdateTodoFormStyle = {
    display: "flex",
  };

  const UpdateTodoInputStyle = {
    flex: "10",
    padding: "5px",
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const UpdateSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      UpdateTodo(title);
      setTitle("");
    }
  };

  return (
    <form style={UpdateTodoFormStyle} onSubmit={UpdateSingleTodo}>
      <input
        type="text"
        name="title"
        placeholder="Add job"
        value={title}
        style={UpdateTodoInputStyle}
        onChange={changeTitle}
      ></input>
      <input type="submit" value="update" className="btn"></input>
    </form>
  );
};

UpdateTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default UpdateTodo;
