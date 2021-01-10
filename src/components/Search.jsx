import React from "react";
class Search extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            kw:''
        }
    }
    handlechange(event){
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="input">
                <input type="text" onChange={()=>this.handlechange()}/>
            </div>
        )
    }
}
export default Search;