import React, { Component } from 'react'
import  './todo.css'

class List extends Component {
 


    render() {
        return (
            <div>
                    <ul>
                        {
                        this.props.items.map((item, index) => <li onClick={() => this.props.removeItem(index)} className='mytodolist' key={index}>{item}</li>)
                        }
                    </ul>
            </div>
        )
    }
}



export default List;

