import './App.css'
import EmojiList from './components/EmojiList';
import Header from "./components/Header";
import Search from "./components/Search";
function App() {
    return (
        <div>
            <Header />
            <Search />
            <EmojiList />
        </div>)
}

export default App;
