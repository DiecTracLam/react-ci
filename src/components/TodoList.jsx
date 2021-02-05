import { Component } from "react";
import "../css/TodoList.css";
import { Todo } from "./Todo";
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }
    render() {
        return (
            <div className="Todolist" >
                {
                    this.state.todos.map((todo,index)=>{
                        return <Todo {...todo} key={index}/>
                    })
                }
            </div>
        )
    }
}
export {TodoList}