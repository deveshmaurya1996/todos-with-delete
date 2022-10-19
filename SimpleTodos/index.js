import {Component} from 'react'
import './index.css'
import TodoItem from './components/TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class App extends Component {
  state = {
    usersTodosList: initialTodosList,
  }

  deleteTodo = id => {
    const {usersTodosList} = this.state
    const filteredTodosData = usersTodosList.filter(each => each.id !== id)
    this.setState({
      usersTodosList: filteredTodosData,
    })
  }

  render() {
    const {usersTodosList} = this.state

    return (
      <div className="app-container">
        <h1 className="title">Simple Todos</h1>
        <ul className="list-container">
          {usersTodosList.map(eachTodo => (
            <TodoItem
              todos={eachTodo}
              key={eachTodo.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
