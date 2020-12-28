import React from 'react'
import '../css/LightBulb.css'
class LightBulb extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:true,
            isExist:0,
        }
    }
    switch(){
        if(this.state.isOn==true)
            this.setState({isOn:false})
        else
            this.setState({isOn:true})   
        this.setState({isExist:this.state.isExist++});    
    }
    render(){
        return(
            <div>
                <img src={this.state.isOn==true ? 'img/on.jpg':'img/off.jpg'} alt="bulb" className='image'/>
                <input type="button" value="Switch" className='button' onClick={()=>this.switch()}/>
            </div>
        )
    }
}

export{LightBulb} 