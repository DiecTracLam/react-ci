import './App.css'
import { ForgetPW } from './components/ForgetPassword';
import { Header } from "./components/Header";
import { TodoApp } from './components/Home';
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/Signup"
function App() {
    const com = {
        '/Signin': <SignIn />,
        '/Signup': <SignUp />,
        '/': <TodoApp />,
        '/Forget':<ForgetPW/>
    }
    return (
        <div className='app-cont'>
            <Header />
            {com[window.location.pathname]}
        </div>
    )
}

export default App;
