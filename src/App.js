import './App.css'
import Emoji from './components/Emoji';
import Header from "./components/Header";
import Search from "./components/Search";
function App() {
    return (
        <div>
            <Header />
            <Search />
            <Emoji title='100'/>
        </div>)
}

export default App;
