import React, { useContext, useRef } from 'react';
import todosContext from '../../context/todosContext'

const AddTodoForm = () => {

    const context = useContext(todosContext);
    const inputRef = useRef('');

    const onSubmitHandler = event => {
        event.preventDefault();

        let todo = {}
        todo.id = Math.round(Math.random() * 1000);
        todo.name = inputRef.current.value;
        todo.isComplete = false;

        context.addTodo(todo)
        inputRef.current.value = null
    }

    return(
        <div>
            <form noValidate onSubmit={onSubmitHandler}>
                <input type="text" placeholder="add new todo" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodoForm;