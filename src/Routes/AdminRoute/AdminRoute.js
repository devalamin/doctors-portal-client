import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const [isAdmin, adminLoading] = useAdmin(user?.email);

    if (loading || adminLoading) {
        return <button className="btn loading">loading....</button>;
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;