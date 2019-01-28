import React, { Component } from 'react';
import './todo.css';

export default class DisplayItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            IsEditing: false
        }
        this.hunddleEdit = this.hunddleEdit.bind(this)
    }

    hunddleEdit(e) {
        console.log('itworks')
        e.preventDefault();
        this.setState({ IsEditing: !this.state.IsEditing});
    }

  render() {
      let item = this.props.item
    return (
        
                    <li className='mytodolist'>
                           <span className={this.state.IsEditing ? 'todo_item_list_hide' : 'todo_item_list'}>
                            {item}
                        </span>
                        <span onClick={this.hunddleEdit} className="editbtn">
                            edit
                        </span>
                        <span onClick={() => this.props.removeItem(this.props.index)} className='close'>x</span>
                        <input
                            placeholder={item}
                            className={this.state.IsEditing ? 'editing_true' : 'editing'}
                            type="text"
                        >
                        </input>
                    </li>
    
    )
  }
}
