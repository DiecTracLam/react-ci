import "../css/SibarApp.css";

export function SibarApp(props) {
    return (
        <div className='sibarApp border'>
            <div className='sibar-img'>
                <img src={props.img} alt=""/>
            </div>
            <div className='Info'>
                <div className='Account flex-row'>
                    <i className="fal fa-user fa-2x"></i>
                    <p>Account</p>
                </div>
                <div onClick={props.Signout} className='Signout flex-row'>
                    <i className="fal fa-sign-out fa-2x"></i>
                    <p>Sign out</p>
                </div>
            </div>
        </div>
    )
}