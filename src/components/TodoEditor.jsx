import "../css/TodoEditor.css";

export function TodoEditor({index,cancle,title,content,save,userID}){
    console.log(index)
    return(
        <div className='TodoEditor'>
            <div className='TodoEditor-icon border'>
                <p className='Cancle-icon' onClick={cancle}>x</p>
                <p className='Save-icon' onClick={()=>save(index,{title,content,userID})}>Save</p>
            </div>
            <div className='TodoEditor-title'>
                <input type="text" defaultValue={title} placeholder="Wrtie your title" onChange={e=>title=e.target.value}/>
            </div>
            <div className='Editor-content'>
                <textarea defaultValue={content} onChange={e=>content=e.target.value} name="" id="" placeholder="Write your content"></textarea>
            </div>
        </div>
    )
}