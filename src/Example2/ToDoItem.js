import React, { Component } from 'react'
import classNames from "classnames";
import "./Todoitem.css";
class ToDoItem extends Component {
    render() {
        const { list } = this.props
        return (
            <div className={classNames({ 'Todoitem-iscomplte': list.isComplete === true }, 'Todoitem')}>
                <p>{list.title}</p>
            </div>
        )
    }
}
export default ToDoItem


/*
    <ToDoITem key={index} item='item'/> ToDoITem.props.item
*/