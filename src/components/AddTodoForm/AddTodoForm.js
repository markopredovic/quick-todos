import React, { useContext, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"
import { withRouter } from 'react-router-dom'
import todosContext from '../../context/todosContext'

const AddTodoForm = (props) => {

    const context = useContext(todosContext);
    const inputRef = useRef('');
    const [error, setError] = useState(null);

    const onSubmitHandler = event => {
        event.preventDefault();
        setError(null);

        const error = validate();

        if(error.length) {
            return setError(error);
        }

        let todo = {}
        todo.id = Math.round(Math.random() * 1000);
        todo.name = inputRef.current.value;
        todo.isComplete = false;

        context.addTodo(todo)
        inputRef.current.value = null
        inputRef.current.focus();
        // props.history.push('/')
        ToastsStore.success("Added to the list! \n(Dodato u listu!)");
    }

    const validate = () => {
        let error = inputRef.current.value.length === 0 ? "Text is empty! \n(Tekst je prazan!)" : '';

        return error;
    }

    const errorCss = {
      borderColor: "red"
    }

    return (
      <div className="l-add-todo">
        <form noValidate onSubmit={onSubmitHandler}>
          <input type="text" placeholder="add (unesi)" ref={inputRef} style={error && errorCss}/>
          <span className="m-inline-error" style={{whiteSpace: 'pre-wrap'}}>{error}</span>
          <button className="m-button green" type="submit">
            <FaPlus />
          </button>
        </form>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_LEFT}
        />
      </div>
    );
}

export default withRouter(AddTodoForm);