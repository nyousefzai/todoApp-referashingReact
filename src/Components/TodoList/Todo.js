import React, { Component } from 'react'
import List from './List'
import './todo.css'

class Todo extends Component {
  constructor(){
    super()
   this.state = {
    todoList:[],
    currentIteam:'',
    condition:false
}

    this.hunddleSubmit = this.hunddleSubmit.bind(this)
    this.hunndleInput = this.hunndleInput.bind(this)
    this.removeItem = this.removeItem.bind(this)
    
  }

hunndleInput (event)  {
  if(event.target.value !== ''){
    this.setState({ currentIteam: event.target.value })
  }

}

hunddleSubmit (event) {
event.preventDefault();
this.setState({
  todoList: [...this.state.todoList, this.state.currentIteam], currentIteam: ''
})
}


  removeItem(index) {
    const todoList = this.state.todoList.filter((todoList, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todoList })
  }


  render() {
    return (
      <div className='main'>
          <p> Tasks </p>
           <div className="todolist">
           <input 
           placeholder="Add your task "
           className='textinput'
           type="text"
           value={this.state.currentIteam}
           onChange={this.hunndleInput}
           ></input>
           <button onClick={this.hunddleSubmit} className='btn'> add </button>
        </div>
        <List items={this.state.todoList} removeItem={this.removeItem}/>
      </div>
    )
  }
}

export default Todo;