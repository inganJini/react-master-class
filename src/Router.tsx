import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/EooroComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path:"user/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    },
])

export default router;