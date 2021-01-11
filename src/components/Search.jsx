import React from "react";
class Search extends React.Component {
    render() {
        return (
            <div className="input">
                <input type="text" placeholder='Input your favorite emoji' onChange={this.props.change}/>
            </div>
        )
    }
}
export default Search;