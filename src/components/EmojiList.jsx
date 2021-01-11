import Emoji from "./Emoji";
import {Component} from 'react'
import {emoji} from "../emojiList.js";
class EmojiList extends Component{
    constructor(){
        super();
        this.state={
            kw:''
        }
    }
    render(){
        const list=[];
        const lengh=emoji.length;
        for(let i=0;i<lengh;i++){
            if(emoji[i].keywords.indexOf(this.props.kw)>=0)
            {
                list.push(<Emoji key={i} {...emoji[i]}/>)
            }
        }
        return(
            <div className="EmojiList">
                {list}
            </div>
        )
    }
}
export default EmojiList;