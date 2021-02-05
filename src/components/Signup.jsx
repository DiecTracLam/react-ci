import "../css/Signup.css"

export function SignUp() {
    return (
        <div className="Body-signup">
            <form action="">
                <div className='signup-comp title'>
                    <h1>Sign Up</h1>
                    {/* <small>Create an account for free</small> */}
                </div>
                <div className='signup-comp'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your name'/>
                </div>
                <div className='signup-comp'>
                    <label htmlFor="">User</label>
                    <input type="text" placeholder='Enter your username '/>
                </div>
                <div className='Email signup-comp'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' name="" id=""/>
                </div>
                <div className='Password signup-comp'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter Password'/>
                </div>
                <div className='signup-comp'>
                    <label htmlFor="">Re-type Password</label>
                    <input type="password" placeholder='Re-type Password' name="" id=""/>
                </div>
                <div className='signup-comp opt'>
                    <div >
                        <input type="checkbox"/>
                        <label style={{marginLeft:'6px'}} htmlFor="">I'm agree for the term and condition</label>
                    </div>
                    <a href="/Signin">Sign in</a>
                </div>
                <div className='signup-comp'>
                    <input type="button" value='Sign-up'/>
                </div>
            </form>
        </div>
    )
}