import React, { Component } from 'react'
import classNames from "classnames";
import "./Todoitem.css";
class ToDoItem extends Component{
    render(){
        return(
            <div className={classNames({'Todoitem':this.props.list.isComplete===true})}>
                {this.props.list.title}
            </div>
        )
    }
}
export default ToDoItem


/* 
    <ToDoITem key={index} item='item'/> ToDoITem.props.item
*/ 