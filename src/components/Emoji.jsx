import React from "react";
import '../css/Emoji.css'
class Emoji extends React.Component{
    render(){
        const {symbol}=this.props;
        const {title}=this.props
        return(
            <div className='Anime'>
                {symbol}{title}
            </div>
        )
    }
}
export default Emoji;