import './App.css'
import Search from "./components/Header.jsx";
import Book from "./components/Book.jsx";
import { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.Search = this.Search.bind(this);
    }
    Search(e) {
        if (e.keyCode === 13) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
                .then(rs => rs.json())
                .then(data2 => {
                    this.setState({data:data2.items})
                })
        }
    }
    render() {
        return (
            <div>
                <Search search={this.Search} />
                <Book books={this.state.data?this.state.data:[]}/>
            </div>
        )
    }
}

export default App;
