import {Component} from "react";
import "../css/Book.css";
class Search extends Component{
    constructor(props){
        super(props);
        this.Search=this.Search.bind(this);
    }
    Search(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div className='SearchBar'>
                <input type="text" placeholder="Input your book " onChange={this.Search}/>
            </div>
        )
    }
}
export default Search;