import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn bg-secondary btn-primary">{children}</button>
    );
};

export default PrimaryButton;