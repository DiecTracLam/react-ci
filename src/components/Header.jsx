import '../css/Header.css'
export function Header(props){
    // const {kw}=props
    // console.log('this is header'+kw);
    return(
        <div className="header">
            <div className='item'>
                <a href='/'>TodoApp</a>
            </div>
            <div className='sibar-header'>
                <ul>
                    <li><a href='/Signin'>Sign in</a></li>
                    <li><a href="/Signup">Sign up</a></li>
                    <li><a href='/About'>About</a></li>
                </ul>
            </div>
        </div>
    )
}