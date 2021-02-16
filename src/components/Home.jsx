import "../css/TodoApp.css";
import { SibarApp } from "./SibarApp";
import { TodoList } from "./TodoList";
export function TodoApp(props) {
    return (
        <div className='TodoApp'>
            <SibarApp userID={props.userID}/>
            <TodoList userID={props.userID}/>
        </div>
    )
}