import { Component } from "react";
import "../css/Signin.css";
import { signinUtis } from '../ultis/ultis';
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:'',
        }
        this.Signup=this.Signup.bind(this)
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        console.log('submit')
        signinUtis(this.state)
        .then(userID=>{
            localStorage.setItem('userID',userID);
            window.location.assign('/')
        }).catch(mess=>{
            alert(mess)
        })
    }
    handleChange(e,type){
        if(type === 'username') this.setState({user:e.target.value})
        if(type === 'password') this.setState({ password:e.target.value})
    }
    Signup(){
        window.location.assign('/Signup')
    }
    render() {
        return (
            <div className='Signin'>
                <div className='Signin-sibar'>
                    <div className='sibar_content'>
                        <div>
                            this is sibar
                    </div>
                        <div>
                            this is logo
                    </div>
                    </div>
                </div>
                <div className='Signin-content'>
                    <form className='Signin-title'>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <div className='Username'>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='Enter username' id='username' onChange={e=>this.handleChange(e,'username')}/>
                        </div>
                        <div className='Password'>
                            <label>Password</label>
                            <input type="password" placeholder='Enter password' id='password' onChange={e=>this.handleChange(e,'password')}/>
                        </div>
                        <div className='Signup'>
                            <a href="/Forget">Forget Password</a>
                            <a  onclick={(e)=>this.Signup()} href="/Signup">Sign Up</a>
                        </div>
                        <div className='Button'>
                            <input type="button" value='Sign In' onClick={()=>this.handleSubmit()}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export {SignIn}