import { Component} from "react";
import "../css/Book.css";
class Book extends Component{
    constructor(props){
        super();
        this.state={
            kw:''
        }
        this.SearchBook=this.SearchBook.bind(this);

    }
    SearchBook(e){
        this.setState({
            kw:e.target.value
        });
        const Api=`https://www.googleapis.com/books/v1/volumes?q=${this.state.kw}`
    }
    render(){
        return(
            <div className="Body">
                <p>Heelo</p>
            </div>
        )
    }
}
export default Book;