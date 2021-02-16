import { Component } from "react";
import "../css/Signup.css"
import { signup } from "../ultis/ultis";
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, type) {
        if (type === 'username') this.setState({ user: e.target.value })
        if (type === 'password') this.setState({ password: e.target.value })
    }
    handleClick() {
        if (this.state.user == '') {
            alert('Username can not empty')
            return false;
        }
        if (this.state.password == '') {
            alert('Password can not empty')
            return false;
        }
        signup(this.state)
        .then(userID=>{
            localStorage.setItem('userID',userID)
            window.location.assign('/')
        })
    }
    render() {
        return (
            <div className="Body-signup">
                <form action="">
                    <div className='signup-comp title'>
                        <h1>Sign Up</h1>
                        {/* <small>Create an account for free</small> */}
                    </div>
                    <div className='signup-comp'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div className='signup-comp'>
                        <label htmlFor="">User</label>
                        <input type="text" placeholder='Enter your username ' id='username' onChange={e => this.handleChange(e, 'username')} />
                    </div>
                    <div className='Email signup-comp'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' name="" id="" />
                    </div>
                    <div className='Password signup-comp'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter Password' id='password' onChange={e => this.handleChange(e, 'password')} />
                    </div>
                    <div className='signup-comp'>
                        <label htmlFor="">Re-type Password</label>
                        <input type="password" placeholder='Re-type Password' name="" id="" />
                    </div>
                    <div className='signup-comp opt'>
                        <div >
                            <input type="checkbox" />
                            <label style={{ marginLeft: '6px' }} htmlFor="">I'm agree for the term and condition</label>
                        </div>
                        <a href="/Signin">Sign in</a>
                    </div>
                    <div className='signup-comp'>
                        <input type="button" value='Sign-up' onClick={() => this.handleClick()} />
                    </div>
                </form>
            </div>
        )
    }
}
export { SignUp }