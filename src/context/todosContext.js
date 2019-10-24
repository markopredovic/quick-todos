// export context
import { createContext } from 'react';

export default createContext({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    getTodos: () => {}
})