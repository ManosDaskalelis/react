import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


function NavBar() {
    const navigate = useNavigate()

    function handleClick() {
        localStorage.clear()
        navigate('/')    
    }

    return (
        <nav className="p-2 navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="w-100 d-flex justify-content-between navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/home' >Home</Link>
                    </li>
                    <button type='button' className='btn btn-primary' onClick={handleClick}>Logout</button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;