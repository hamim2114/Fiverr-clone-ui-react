import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
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
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true;

function App() {
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
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
