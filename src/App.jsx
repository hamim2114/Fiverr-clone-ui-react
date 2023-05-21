import { createBrowserRouter, Outlet, Navigate, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Footer from './components/footer/Footer';
import {useSelector} from 'react-redux'

function App() {
    const {user} = useSelector(state => state.user)
    const Layout = () => {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/gigs',
                    element: <Gigs />,
                },
                {
                    path: '/mygigs',
                    element: <MyGigs />,
                },
                {
                    path: '/orders',
                    element: <Orders />,
                },
                {
                    path: '/messages',
                    element: <Messages />,
                },
                {
                    path: '/message/:id',
                    element: <Message />,
                },
                {
                    path: '/add',
                    element: <Add />,
                },
                {
                    path: '/gig/:id',
                    element: <Gig />,
                },
            ],
        },
        {
          path: '/login',
          element: !user ? <Login/> : <Navigate to='/' />
        },
        {
          path: '/register',
          element: <Register/>
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
