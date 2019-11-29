import React, { useContext, useRef, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"
import LocalizedStrings from "react-localization";
import { withRouter } from 'react-router-dom'
import todosContext from '../../context/todosContext'


const AddTodoForm = (props) => {

  let strings = new LocalizedStrings({
    en: {
      addToList: "Added to the list!",
      inputPlaceholderAdd: "enter task",
      emptyField: "empty field!"
    },
    rs: {
      addToList: "Dodato u listu!",
      inputPlaceholderAdd: "unesi stavku",
      emptyField: "prazno polje!"
    }
  });

    const context = useContext(todosContext);
    const inputRef = useRef('');
    const [error, setError] = useState(null);

    strings.setLanguage(context.lang)

    useEffect(() => {
      inputRef.current.focus();
    }, [])

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
        ToastsStore.success(strings.addToList);
    }

    const validate = () => {
        let error = inputRef.current.value.length === 0 ? strings.emptyField : '';

        return error;
    }

    const errorCss = {
      borderColor: "red"
    }

    return (
      <div className="l-add-todo">
        <form noValidate onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder={strings.inputPlaceholderAdd}
            ref={inputRef}
            style={error && errorCss}
          />
          <span className="m-inline-error" style={{ whiteSpace: "pre-wrap" }}>
            {error}
          </span>
          <button className="m-button green" type="submit">
            <FaPlus />
          </button>
        </form>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      </div>
    );
}

export default withRouter(AddTodoForm);