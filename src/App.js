import './App.css'
import EmojiList from './components/EmojiList';
import Header from "./components/Header";
import Search from "./components/Search";
import React from "react";
class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            kw: ''
        }
        this.handlechange = this.handlechange.bind(this);
    }
    handlechange(event) {
        this.setState({ kw: event.target.value });
    }
    render() {
        return (
            <div>
                <Header />
                <Search change={this.handlechange}/>
                <EmojiList kw={this.state.kw}/>
            </div>)
    }
}

export default App;
