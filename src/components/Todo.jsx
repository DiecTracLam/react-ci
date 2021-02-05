import "../css/Todo.css";

export function Todo(){
    return(
        <div className='Todo border'>
            <div className='Todo-title '>
                <h1>Title</h1>

            </div>
            <div className='Todo-content'>
                <p>asdasdasd</p>
            </div>
            <div className='Todo-function border'>
                <p className='Todo-view'>View</p>
                <p className='Todo-edit'>Edit</p>
                <p className='Todo-complete'>Complete</p>
                <p className='Todo-remove'>Remove</p>
            </div>
        </div>
    )
}