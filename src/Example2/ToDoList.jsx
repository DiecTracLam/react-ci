import ToDoItem from "./ToDoItem.js";
import './Todoitem.css';
import React, { Component } from 'react';
import '../App.css'
// import classNames from "classnames";
class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                { title: 'Mua bim bim', isComplete: true },
                { title: 'Di da banh', isComplete: true },
                { title: 'Xem phim', isComplete: false }
            ]
        }
    }
    onItem(item) {
        const toDoItem = this.state.todoItems;
        const discomplete = !item.isComplete;
        const index = toDoItem.indexOf(item);
        console.log(index)
        this.setState({
            todoItems: [
                ...toDoItem.slice(0, index),
                {
                    ...item, isComplete: discomplete
                },
                ...toDoItem.slice(index + 1)
            ]
        }

        );
    }
    render() {
        console.log()
        return (
            <div className="App list">
                {this.state.todoItems.map((item, index) => {
                    return (
                        <div key={index} className='list-todoitem'>
                            <ToDoItem key={index} list={item} />
                            <button onClick={() => this.onItem(item)}></button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ToDoList;