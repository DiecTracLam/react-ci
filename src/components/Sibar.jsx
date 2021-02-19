import '../css/Sibar.css'
export function Sibar(){
    return(
        <div className='Sibar'>
            
            <form className='Container-sibar' action="">
                this is sibar
                <input className='Search-sibar' placeholder='Search' type="text"/>
                <div className='Conservasion'>
                    <div>Dragon</div>
                    <div>Monkey</div>
                </div>
            </form>
        </div>
    )
}