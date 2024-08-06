import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
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

function EditMovie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const movie = useSelector(state => state.movie).find(m => m.id === Number(id))



    function submitMovie(event) {
        event.preventDefault()

        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        console.log(data)
        data.id = id
        dispatch(movieActions.edit(data))
        navigate('/home')
    }

    if (!movie) {
        return (
            <>
                <NavBar />
                <div className="d-flex justify-content-center mt-3 mx-auto text-center">
                    <p className="mb-0 alert alert-danger">
                        Movie not found!
                    </p>
                </div>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <form onSubmit={submitMovie}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <label className='form-label'>Id</label>
                        <input className='form-control' type='text' name='title' value={movie.id} readOnly />
                    </div>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <label className='form-label'>Title</label>
                        <input className='form-control' type='text' name='title' defaultValue={movie.title} required />
                    </div>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <label className='form-label'>Url</label>
                        <input className='form-control' type='text' name='url' defaultValue={movie.url} required />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default EditMovie;