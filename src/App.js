import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,

        
        children: [
            { index: true, element: <Home /> },
            { path: '/videos', element: <Videos /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
