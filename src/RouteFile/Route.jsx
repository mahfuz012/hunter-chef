import { createBrowserRouter } from "react-router-dom";
import Main from "../LayoutFile/Main";
import Home from "../PageFile/Home";
import Details from "../ComponentFile/Details";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path:'/',
          element:<Home />,
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