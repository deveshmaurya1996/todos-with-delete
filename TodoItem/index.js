// Write your code here
import './index.css'

const TodoItem = props => {
  const {todos, deleteTodo} = props
  const {title, id} = todos
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-card-container">
      <div className="todo-details-container">
        <h1 className="title">{title}</h1>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
