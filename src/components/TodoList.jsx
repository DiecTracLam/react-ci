import { Component } from "react";
import "../css/TodoList.css";
import { Todo } from "./Todo";
import { addTodo, getTodo, updateTodo ,removeToDo } from '../ultis/ultis'
import { TodoEditor } from "./TodoEditor";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            todos: [123],
            isEdit: false,
            selected: 123,
            selectedind: '',
        }
        this.cancleEditor = this.cancleEditor.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.add = this.add.bind(this)
    }
    save = (index, newTodo) => {
        let todos = this.state.todos
        newTodo.created=new Date(Date.now()).toDateString()
        if (todos.length === index) {
            newTodo.id=index
            newTodo.isComplete=false;
            addTodo(newTodo).then(id=>{
                newTodo.id=id;
                updateTodo(newTodo)
                todos[index]=newTodo;
                this.setState({ todos: todos, isEdit: false })
            })
        }
        else {
            todos[index] = newTodo
            updateTodo(newTodo);
            this.setState({ todos: todos, isEdit: false })
        }
    }
    Complete=(index)=>{
        let todos = this.state.todos;
        todos[index].isComplete=!todos[index].isComplete
        updateTodo(todos[index]);
        this.setState({todos:todos})
    }
    removeTodo=(index)=>{
        let todos=this.state.todos;
        removeToDo(todos[index])
        delete todos[index];
        this.setState({todos:todos})
    }
    cancleEditor() {
        this.setState({ isEdit: false });
    }
    editTodo = (todo, index) => {
        this.setState({ isEdit: true, selected: todo, selectedind: index })
    }
    add = (index) => {
        this.setState({ isEdit: true, selected: '', selectedind: index })
        // this.setState({selected:todo})
    }
    // componentDidMount() {
    //     console.log("=========================================================")
    //     console.log('Did mount TodoList')
    //     console.log(this.props)
    //     console.log(this.state.userId);
    //     getTodo().then(data => {
    //         this.setState({ todos: data })
    //     })
    // }
    componentDidUpdate() {
        // console.log('Update mount TodoList')
        // console.log('u')
        getTodo(this.props.userID).then(data => {
            // console.log(JSON.stringify (this.state.todos))
            // console.log(JSON.stringify (data))
            // console.log(this.state.userID)
            if (JSON.stringify (this.state.todos) != JSON.stringify(data) && this.state.userID == '') {
                console.log('set')
                this.setState({ todos:data , userID:this.props.userID })
            }
        })
    }
    render() {
        if (this.state.isEdit) {
            return (
                <div className='Todolist'>
                    <TodoEditor {...this.state.selected} ownerID={this.state.userID} index={this.state.selectedind} cancle={this.cancleEditor} save={this.save} />
                </div>
            )
        }
        return (
            <div className="Todolist" >
                {
                    this.state.todos.map((todo, index) => {
                        return <Todo {...todo} key={index} remove={()=>this.removeTodo(index)}
                        edit={() => this.editTodo(todo, index)} Complete={()=>this.Complete(index)}/>
                    })
                }
                <div className='add'>
                    <i className="fal fa-plus fa-2x" onClick={() => this.add(this.state.todos.length)}></i>
                </div>
            </div>
        )
    }
}
export { TodoList }