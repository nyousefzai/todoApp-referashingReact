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
    this.hunndleInput  = this.hunndleInput.bind(this)
    this.removeItem    = this.removeItem.bind(this)
    
  }


  hunndleInput (event) {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });

};



hunddleSubmit (event) {
event.preventDefault();
(this.state.currentIteam === '') ? this.setState({ condition:true}) :
this.setState({
  todoList: [...this.state.todoList, this.state.currentIteam], currentIteam: '',condition:false
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
      <div>
          <p> Tasks </p>
          <div >
            <form onSubmit={this.hunddleSubmit}>
           <input 
           placeholder="Add your task "
            className= { this.state.condition ? 'textinputgored' : 'textinput' }
           type="text"
           name="currentIteam"
           value={this.state.currentIteam}
           onChange={this.hunndleInput}
           
           ></input>
           <button onClick={this.hunddleSubmit} className='btn'> add </button>
            </form>
           
        </div>
        
      </div>
      <List items={this.state.todoList} removeItem={this.removeItem}/>
      </div>
    )
  }
}

export default Todo;