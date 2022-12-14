import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn uppercase border-none font-bold text-white bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default PrimaryButton;