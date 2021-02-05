import "../css/Signin.css";
export function SignIn() {
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
                        <input type="text" placeholder='Enter username'/>
                    </div>
                    <div className='Password'>
                        <label>Password</label>
                        <input type="password" placeholder='Enter password'/>
                    </div>
                    <div className='Signup'>
                        <a href="/Forget">Forget Password</a>
                        <a href="/Signup">Sign Up</a>
                    </div>
                    <div className='Button'>
                        <input type="button" value='Sign In'/>
                    </div>
                </form>
            </div>
        </div>
    )
}