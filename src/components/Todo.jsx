import "../css/Todo.css";

export function Todo({edit,title,content,created,remove,Complete,isComplete}){
    return(
        <div className='Todo border '>
            <div className={`Todo-title ${isComplete?'Complete':''}`}>
                <h1>{title}</h1>
                <small className=''>{created}</small>
            </div>
            <div className={`Todo-content ${isComplete?'Complete':''}` }>
                <p>{content}</p>
            </div>
            <div className='Todo-function border'>
                <p className='Todo-view'>View</p>
                <p className='Todo-edit' onClick={edit}>Edit</p>
                <p className='Todo-complete' onClick={Complete}>Complete</p>
                <p className='Todo-remove' onClick={remove}>Remove</p>
            </div>
        </div>
    )
}