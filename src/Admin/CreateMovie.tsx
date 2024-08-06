import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { redirect } from "react-router-dom";
import { movieActions } from '../store/Movies'
import NavBar from "../components/NavBar";


export function loader() {
    if (localStorage.getItem('user') !== 'admin') {
        localStorage.clear()
        return redirect('/')
    }
    return null
}

function CreateMovie() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function submitMovie(event) {
        event.preventDefault()

        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        console.log(data)
        dispatch(movieActions.create(data))
        navigate('/home')
    }

    return (
        <>
            <NavBar />
            <form onSubmit={submitMovie}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <label className='form-label'>Title</label>
                        <input type='text' name='title' className='form-control' required/>
                    </div>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <label className='form-label'>Url</label>
                        <input type='text' name='url' className='form-control' required />
                    </div>
                    <button  className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default CreateMovie;