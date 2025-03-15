import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";


export const router = createBrowserRouter([
    {
        path:"/",
        element : <Layout></Layout>,
        children : [
            {
                path:"/",
                element : <HomePage></HomePage>
            },
            {
                path:"about",
                element : <h1>About</h1>
            },
            {
                path : "service",
                element : <h1>Services</h1>
            },
            {
                path : "involved",
                element : <h1>Involved</h1>
            },
            {
                path : "auction",
                element : <h1>Auction</h1>
            },
            {
                path : "contact",
                element : <h1>Contact</h1>
            },
            {
                path : "podcast",
                element : <h1>Podcast</h1>
            }
        ]
    }
])