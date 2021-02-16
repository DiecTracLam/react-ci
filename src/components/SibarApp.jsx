import "../css/SibarApp.css";

export function SibarApp() {
    return (
        <div className='sibarApp border'>
            <div className='sibar-img'>
                <img src="https://dep.com.vn/wp-content/uploads/Detective-Pikachu-Valentines-Featured_edited.jpg" alt=""/>
            </div>
            <div className='Info'>
                <div className='Account flex-row'>
                    <i className="fal fa-user fa-2x"></i>
                    <p>Account</p>
                </div>
                <div className='Signout flex-row'>
                    <i className="fal fa-sign-out fa-2x"></i>
                    <p>Sign out</p>
                </div>
            </div>
        </div>
    )
}