import ToDoItem from "./ToDoItem.js";
import './Todoitem.css';
import React, { Component } from 'react';
// import classNames from "classnames";
class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            todoItems:[
                {title:'Mua bim bim',isComplete:true},
                {title:'Di da banh',isComplete:true},
                {title:'Xem phim',isComplete:false}
            ]
        }
    }
    onItem(){
        console.log(this.state.todoItems.title)
        this.setState({isComplete:!this.state.todoItems.isComplete});
    }
    render(){
        return(
            <div>
                {this.state.todoItems.map((item,index)=>{
                    return (
                        <div>
                            <ToDoItem  key={index} list={item}/>
                            <button onClick={()=>this.onItem}></button>
                        </div>
                        )
                })}
            </div>
        )
    }
}
export default ToDoList;