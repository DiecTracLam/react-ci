import {Component} from "react";
import "../css/Book.css";
class Search extends Component{
    render(){
        return(
            <div className='SearchBar'>
                <input type="text" placeholder="Input your book " onKeyUp={this.props.search}/>
            </div>
        )
    }
}
export default Search;