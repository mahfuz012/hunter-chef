import { createBrowserRouter } from "react-router-dom";
import Main from "../LayoutFile/Main";
import Home from "../PageFile/Home";
import Details from "../ComponentFile/Details";
import Error from "../ComponentFile/Error";
import Blog from "../ComponentFile/Blog";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<Error />,
      children:[
        {
          path:'/',
          element:<Home />,
          loader :()=> fetch("https://myapp-eta-six.vercel.app/categories")
        },
        {
          path:'/blog',
          element:<Blog />,
          loader :()=> fetch("https://myapp-eta-six.vercel.app/categories")
        },
        {
          path:`/details/:id`,
          element:<Details />,
          loader :()=> fetch("https://myapp-eta-six.vercel.app/categories")
          
        }
      ]
    },
  ]);


export default router;