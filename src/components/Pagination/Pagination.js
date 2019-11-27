import React, { useContext } from 'react';
import TodosContext from '../../context/todosContext'
import Button from '../Button'

const Pagination = () => {

  const context = useContext(TodosContext)

  console.log('[CONTEXT]', context)

  const makeButtons = num => {
    console.log('[MAKE BUTTONS  NUM]', num)
    const buttons = new Array(num).fill('').map((item, index) => <Button key={index} index={index}/>)

    return buttons
  }

  const calculateTotalPages = () => {
    let total = 0
    const todos_count = context.todos.length
    const itemsPerPage = context.pagination.itemsPerPage

    total =
      todos_count % itemsPerPage !== 0
        ? Math.floor(todos_count / itemsPerPage) + 1
        : Math.floor(todos_count / itemsPerPage);

    return total
  }

  const buttons = makeButtons(calculateTotalPages());

  return(
    <div className="l-pagination">
      {buttons}
    </div>
  )
}

export default Pagination;