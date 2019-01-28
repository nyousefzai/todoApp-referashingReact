import React, { Component } from 'react'
import DisplayItem from './DisplayItem'
import  './todo.css'

class List extends Component {


    render() {
        return (
            <div>
                <ul className="unorder_list">
                    {
                        this.props.items.map((item, index) => {
                            return(  <DisplayItem 
                            key={item}
                            item={item} 
                            removeItem={this.props.removeItem} 
                            index={index}/>
                          )
                        })
                    }


                </ul>

            </div>
        )
    }
}



export default List;

