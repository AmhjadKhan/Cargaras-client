import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Layout from '../Layout/Layout.jsx';
import Error from '../PAGES/Errorpage.jsx';
import Login from '../PAGES/mainpages/Login.jsx';
import About from '../PAGES/mainpages/About.jsx';
import Services from '../PAGES/Apppagehelp/services/Services.jsx';
import Contant from '../PAGES/mainpages/Contant.jsx';
import Blog from '../PAGES/mainpages/Blog.jsx';

const router =  createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      errorElement:<Error />,
      children:[
        {
          path:'/',
          element:<App />
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/service',
          element:<Services />
        },
        {
          path:"/blog",
          element:<Blog />
        },
        {
          path:"/contact",
          element:<Contant />
        },
        {
          path:'/login',
          element:<Login />
        }
      ]
    },
  ]);
  export default router