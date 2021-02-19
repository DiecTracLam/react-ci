import '../css/chatApp.css'
import { Main } from "./Main";
import { Sibar } from './Sibar'
export function Chatapp(){
    return(
        <div className='chatApp'>
            <Sibar/>
            <Main/>
        </div>
    ) 
}