import React, { useContext, useRef } from 'react';
import { FaPlus } from 'react-icons/fa'
import { ToastsContainer, ToastsStore } from "react-toasts"
import { withRouter } from 'react-router-dom'
import todosContext from '../../context/todosContext'

const AddTodoForm = (props) => {

    const context = useContext(todosContext);
    const inputRef = useRef('');

    const onSubmitHandler = event => {
        event.preventDefault();

        const error = validate();

        if(error.length) {
            return ToastsStore.error(error);
        }

        let todo = {}
        todo.id = Math.round(Math.random() * 1000);
        todo.name = inputRef.current.value;
        todo.isComplete = false;

        context.addTodo(todo)
        inputRef.current.value = null
        inputRef.current.focus();
        // props.history.push('/')
        ToastsStore.success("Todo is added! See Todos for whole list");
    }

    const validate = () => {
        let error = inputRef.current.value.length === 0 ? "Insert todo" : '';

        return error;
    }

    return (
      <div className="l-add-todo">
        <form noValidate onSubmit={onSubmitHandler}>
          <input type="text" placeholder="add new todo" ref={inputRef} />
          <button className="m-button green" type="submit">
            <FaPlus />
          </button>
        </form>
        <ToastsContainer store={ToastsStore} />
      </div>
    );
}

export default withRouter(AddTodoForm);