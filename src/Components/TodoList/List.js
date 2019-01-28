import React, { Component } from 'react'
import DisplayItem from './DisplayItem'
import PropTypes from 'prop-types';
import  './todo.css'

class List extends Component {


    render() {
        let items = this.props
        console.log(items)
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


DisplayItem.propTypes = {
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};


export default List;

