import { render } from "@testing-library/react";
import { Component } from "react";
import "../css/TodoApp.css";
import { SibarApp } from "./SibarApp";
import { TodoList } from "./TodoList";
import { infor } from '../ultis/ultis'
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            img: ''
        }
        this.Signout=this.Signout.bind(this);
    }
    componentDidUpdate() {
        console.log('home')
        infor(this.props.userID).then(img => {
            if (this.state.userID == '')
                this.setState({ img: img, userID: this.props.userID })
        })
    }
    Signout(){
        window.location.assign('./Signin')
        localStorage.removeItem('userID')
    }
    render() {
        return (
            <div className='TodoApp'>
                <SibarApp Signout={this.Signout} img={this.state.img} userID={this.state.userID} />
                <TodoList userID={this.state.userID} />
            </div>
        )
    }
}
export { TodoApp }