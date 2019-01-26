import React, { Component } from 'react'
import  './todo.css'

class List extends Component {
 
 childLi = ()=>{
    return <ul className="unorder_list">
        {
            this.props.items.map((item, index) => <li className='mytodolist' key={index}>{item}
                <input placeholder={ item } type="text" name="" id=""></input>
                <span onClick={() => this.props.removeItem(index)} className='close'>x</span>

            </li>)
        }
    </ul>
}

//  childLi = () => {
//      return <ul className="unorder_list">
//          {
//              this.props.items.map((item, index) => <input className='mytodolist' key={index}>{item}
//                  <span onClick={() => this.props.removeItem(index)} className='close'>x</span>

//              </input>)
//          }
//      </ul>
//  }





    render() {
        return (
            <div>
                 {this.childLi()} 
            </div>
        )
    }
}



export default List;

