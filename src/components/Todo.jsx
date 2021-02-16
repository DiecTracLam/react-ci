import "../css/Todo.css";

export function Todo({edit,title,content,created}){
    return(
        <div className='Todo border'>
            <div className='Todo-title '>
                <h1>{title}</h1>
            </div>
            <div className='Todo-content'>
                <p>{content}</p>
            </div>
            <div className='Todo-function border'>
                <p className='Todo-view'>View</p>
                <p className='Todo-edit' onClick={edit}>Edit</p>
                <p className='Todo-complete'>Complete</p>
                <p className='Todo-remove'>Remove</p>
            </div>
        </div>
    )
}