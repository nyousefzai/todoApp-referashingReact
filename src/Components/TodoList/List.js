import React, { Component } from 'react'
import  './todo.css'

class List extends Component {
 


    render() {
        return (
            <div>
                    <ul>
                        {
                        this.props.items.map((item, index) => <li className='mytodolist' key={index}>{item}
                            <span onClick={() => this.props.removeItem(index)} className='close'>x</span>
                            
                            </li>)
                        }
                    </ul>
            </div>
        )
    }
}



export default List;

