import { Component } from 'react';
import './App.css'

// import { addToDo, editTodo, getTodo, signUp } from "./ultis/ultis";
// signUp({ user: 'Lam', password: '123' })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(data=>{
//         console.log(data);
//     })
// addToDo({user:'Kien',password:'456'}) 
// editTodo({
//     everyday:'coi phim , lam bai ',
//     playgame:'Lien minh , fifa , ... '
// })
// getTodo({user:'Kien'})   

import { ForgetPW } from './components/ForgetPassword';
import { Header } from "./components/Header";
import { TodoApp } from './components/Home';
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/Signup"
class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            userID:'',
        }
    }
    componentDidMount(){
        this.setState({userID:localStorage.getItem('userID')})
    }
    render() {
        const com = {
            '/Signin': <SignIn />,
            '/Signup': <SignUp />,
            '/': <TodoApp userID={this.state.userID}/>,
            '/Forget': <ForgetPW />
        }
        if(localStorage.getItem('userID')==null && window.location.pathname !=='/Signin' && window.location.pathname !=='/Signup'){
            window.location.assign('/Signin')
        }
        return (
            <div className='app-cont'>
                <Header />
                {com[window.location.pathname]}
            </div>
        )
    }
}

export default App;

