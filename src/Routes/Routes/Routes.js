import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'
import Main from '../../Layout/Main'
import Appointment from '../../pages/Appointment/Appointment/Appointment'
import AddDoctor from '../../pages/Dashboard/AddDoctor/AddDoctor'
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers'
import Dashboard from '../../pages/Dashboard/Dashboard'
import ManageDoctors from '../../pages/Dashboard/ManageDoctors/ManageDoctors'
import MyAppointment from '../../pages/Dashboard/MyAppointment/MyAppointment'
import Payment from '../../pages/Dashboard/Payment/Payment'
import DisplayError from '../../pages/DisplayError/DisplayError'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import AdminRoute from '../AdminRoute/AdminRoute'
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])