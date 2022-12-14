import { createBrowserRouter } from "react-router-dom"
import Blog from "../Pages/Blog/Blog"
import CourseDetails from "../Pages/CourseDetails/CourseDetails"
import Checkout from "../Pages/Checkout/Checkout"
import Courses from "../Pages/Courses/Courses"
import Error from "../Pages/Error/Error"
import FAQ from "../Pages/FAQ/FAQ"
import Login from "../Pages/Form/Login"
import SignUp from "../Pages/Form/SignUp"
import Main from "../Pages/Layout/Main"
import PrivateRouter from "../PrivateRouter/PrivateRouter"

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader:()=>fetch('https://programming-server.vercel.app/courses')
            },
            {
                path:`/course/:id`,
                element:<CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://programming-server.vercel.app/course/${params.id}`)
            },
            {
                path: `/checkout/:id`,
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter> ,
                loader: ({ params }) => fetch(`https://programming-server.vercel.app/course/${params.id}`)
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