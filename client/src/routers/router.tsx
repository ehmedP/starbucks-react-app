import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <App />,
        children: [
            { 
                path: "/", 
                element: <Home /> 
            },
            {
                path: "/login", 
                element: <Login /> 
            },
        ]
    }
]);