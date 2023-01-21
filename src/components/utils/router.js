import { createBrowserRouter } from "react-router-dom";
import Posts from '../pages/Posts';
import PostIdPage from "../pages/PostIdPage";
import Error from '../pages/Error';
import Main from '../pages/Main';
import About from "../pages/About";
import Login from "../pages/Login";
import AuthError from "../pages/AuthError";




 const publicRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        errorElement:<Error/> ,
        children:[
            {
                path:"posts",
                element:<Posts/>,
            },
            {
                path:"posts/:id",
                element:<PostIdPage/>,
                loader:({params})=>{
                    return params
                }
            },
            {
                path:"about",
                element:<About/>
            },
        ]
    }
]);

const privateRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        errorElement:<AuthError/> ,
        children:[
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
]);
export {privateRouter,publicRouter};