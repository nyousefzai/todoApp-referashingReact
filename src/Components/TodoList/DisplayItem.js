import React, { Component } from 'react';
import './todo.css';

export default class DisplayItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            IsEditing: false,
            EditValue:[]
        }
        this.hunddleEdit = this.hunddleEdit.bind(this)
        this.handleEditing = this.handleEditing.bind(this)
    }

    
    componentDidMount() {
      this.setState({EditValue: [this.props.item]})
      
    }
    

    hunddleEdit(e) {
        e.preventDefault();
        this.setState({ IsEditing: !this.state.IsEditing});
    }


    handleEditing(e){
        let newText = e.target.value;
        this.setState({
            EditValue:newText
        })
    }

  render() {
      let item = this.props.item
    return (
        
                    <li className='mytodolist'>
                           <span className={this.state.IsEditing ? 'todo_item_list_hide' : 'todo_item_list'}>
                            {this.state.EditValue}
                        </span>
                        <span onClick={this.hunddleEdit} className="editbtn">
                            edit
                        </span>
                        <span onClick={()=> this.props.removeItem(this.props.index)} className='close'>x</span>
                        <input
                            placeholder={item}
                            className={this.state.IsEditing ? 'editing_true' : 'editing'}
                            type="text"
                            value={this.state.EditValue}
                            onChange={this.handleEditing}
                        >
                        </input>
                    </li>
    
    )
  }
}
