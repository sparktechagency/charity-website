import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import FundraisingPage from "../pages/fundraising/FundraisingPage";
import PodcastPage from "../pages/podcast/PodcastPage";


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
                element : <AboutPage></AboutPage>,
            },
            {
                path : "service",
                element : <ServicePage></ServicePage>
            },
            {
                path : "fundraising-get-involved",
                element : <FundraisingPage></FundraisingPage>
            },
            {
                path : "auction",
                element : <h1 className="pt-16" >Auction</h1>
            },
            {
                path : "contact",
                element : <h1>Contact</h1>
            },
            {
                path : "podcast",
                element : <PodcastPage></PodcastPage>
            }
        ]
    }
])