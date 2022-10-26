import { createBrowserRouter } from "react-router-dom"
import Blog from "../Pages/Blog/Blog"
import Course from "../Pages/Course/Course"
import Error from "../Pages/Error/Error"
import FAQ from "../Pages/FAQ/FAQ"
import Login from "../Pages/Form/Login"
import SignUp from "../Pages/Form/SignUp"
import Main from "../Pages/Layout/Main"

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])