import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // react-router-dom 패키지를 가져옴
import './App.css'; // App.css 파일을 가져옴
import Home from './pages/Home'; // Home 컴포넌트를 가져옴
import Videos from './pages/Videos'; // Videos 컴포넌트를 가져옴
import NotFound from './pages/NotFound'; // NotFound 컴포넌트를 가져옴
import Root from './pages/Root'; // Root 컴포넌트를 가져옴
import About from './pages/About';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([ // 브라우저 라우터를 생성
    {
        path: '/', // 루트 경로
        element: <Root />, // 루트 컴포넌트
        errorElement: <NotFound />, // 에러 발생 시 보여줄 컴포넌트

        children: [ // 하위 경로와 해당 컴포넌트
            { index: true, element: <Home /> }, // '/' 경로에 대한 컴포넌트
            { path: '/videos', element: <Videos /> }, // '/videos' 경로에 대한 컴포넌트
            { path: '/videos/:videoId', element: <VideoDetail /> }, // 'videoId'가 파라미터 역할을 한다.
            { path: '/about', element: <About /> }, // '/about' 경로에 대한 컴포넌트
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router}></RouterProvider>; // RouterProvider를 사용해 라우터를 적용
}