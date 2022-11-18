import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'
import Main from '../../Layout/Main'
import Appointment from '../../pages/Appointment/Appointment/Appointment'
import Dashboard from '../../pages/Dashboard/Dashboard'
import MyAppointment from '../../pages/Dashboard/MyAppointment/MyAppointment'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])