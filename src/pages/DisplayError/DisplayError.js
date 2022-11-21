import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {

    const error = useRouteError();
    return (
        <div>
            <p className="text-3xl text-red-700">Sorry something wrong</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default DisplayError;