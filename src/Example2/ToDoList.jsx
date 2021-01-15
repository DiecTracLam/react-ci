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
                { title: 'Mua bim bim', isComplete: false },
                { title: 'Di da banh', isComplete: false },
                { title: 'Xem phim', isComplete: false }
            ]
        }
        this.onKeyup = this.onKeyup.bind(this);
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
        });
    }
    onKeyup(ev) {
        console.log(this.state.todoItems)
        console.log(...this.state.todoItems)
        let text = ev.target.value;
        text = text.trim();
        if (text === '') {
            ev.target.value = '';
            return;
        }
        if (ev.keyCode === 13) {
            this.setState({
                todoItems: [
                    {
                        title: text, isComplete: false
                    },
                    ...this.state.todoItems,
                ]
            })
            ev.target.value = ' ';
        }
    }
    render() {
        return (
            <div className="list">
                <div className="Header">
                    <input type="checkbox" />
                    <input type="text" onKeyUp={this.onKeyup} />
                </div>
                {this.state.todoItems.map((item, index) => {
                    return (
                        <div key={index} className='list-todoitem'>
                            <input type="checkbox" onClick={() => this.onItem(item)} />
                            <ToDoItem key={index} list={item} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ToDoList;