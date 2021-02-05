import "../css/TodoApp.css";
import { SibarApp } from "./SibarApp";
import { TodoList } from "./TodoList";
export function TodoApp() {
    return (
        <div className='TodoApp'>
            <SibarApp/>
            <TodoList/>
        </div>
    )
}