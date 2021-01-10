import Emoji from "./Emoji";
import {Component} from 'react'
import {emoji} from "../emojiList.js";
class EmojiList extends Component{
    render(){
        const list=[];
        for(let i=0;i<40;i++){
            list.push(<Emoji key={i} {...emoji[i]}/>)
        }
        return(
            <div className="EmojiList">
                {list}
            </div>
        )
    }
}
export default EmojiList;