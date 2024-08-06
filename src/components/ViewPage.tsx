import { useSelector } from 'react-redux'
import { redirect, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { movieActions } from '../store/Movies'
import NavBar from "./NavBar";
import MovieTemplate from '../components/MovieTemplate'

export function loader() {
    if (localStorage.getItem('user') !== 'admin' && localStorage.getItem('user') !== 'user1') {
        return redirect('/')
    }
    return null
}

function ViewPage() {
    const movies = useSelector(state => state.movie)
    const isAdmin = (localStorage.getItem('user') === 'admin')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function createHandler() {
        navigate('/create')
    }

    function editHandler(id) {

        

        navigate(`/edit/${id}`)
    }

    function deleteHandler(id) {

        if (window.confirm('Are you sure?')) {
            dispatch(movieActions.delete({ id }))

        }
    }

    return (
        <>
            <NavBar />
            <div className="mt-4 container">
                {isAdmin && (
                    <div className="mb-4 d-flex justify-content-start">
                        <button type="button" className="btn btn-primary" onClick={createHandler}>
                            Create New Movie
                        </button>
                    </div>
                )}
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {movies.map((movie) => (
                        <MovieTemplate key={movie.id} id={movie.id} title={movie.title} url={movie.url}>
                            {isAdmin && (
                                <div className="d-flex justify-content-between mt-3">
                                    <button type="button" className="btn btn-secondary mx-1" onClick={() => editHandler(movie.id)}>
                                        Edit
                                    </button>
                                    <button type="button" className="btn btn-danger mx-1" onClick={() => deleteHandler(movie.id)}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </MovieTemplate>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ViewPage;