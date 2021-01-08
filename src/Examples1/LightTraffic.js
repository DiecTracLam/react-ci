import React, { Component } from 'react'
import classNames from "classnames";
import "./LightTraffic.css";
const red='red';
const green='green';
const yellow='yellow';
class ToDoItem extends Component{
    constructor(){
        super();
        this.state={
            color:red
        };
        setInterval(()=>{
            this.setState( {color : this.getcolor(this.state.color)})
        },1000)
    }
    getcolor(color){
        switch (color) {
            case red:
                return yellow;
            case yellow:
                return green;    
            default:
                return red;
        }
    }
    render(){
        return(
            <div className='Traffic'>
                <div className={classNames('light', 'red' ,{active:this.state.color===red})}></div>
                <div className={classNames('light', 'yellow' ,{active:this.state.color===yellow})}></div>
                <div className={classNames('light', 'green' ,{active:this.state.color===green})}></div>
            </div>
        )
    }
}
export default ToDoItem