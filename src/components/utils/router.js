import { createBrowserRouter } from "react-router-dom";
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import App from '../../App';
import About from "../pages/About";


 const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error/> ,
        children:[
            {
                path:"posts",
                element:<Posts/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    }
]);
export default router;