import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './App.css'
import LoginPage from './components/LoginPage'
import ViewPage, { loader as viewLoader } from './components/ViewPage'
import AdminTab from './components/AdminTab'
import CreateMovie, { loader as createLoader } from './Admin/CreateMovie'
import EditMovie, { loader as editLoader } from './Admin/EditMovie'

const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    {
        path: 'home',
        element: <ViewPage />,
        loader: viewLoader
    },
    {
        path: 'create',
        element: <CreateMovie />,
        loader: createLoader
    },
    {
        path: 'edit/:id',
        element: <EditMovie />,
        loader: editLoader
    }
])



function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
