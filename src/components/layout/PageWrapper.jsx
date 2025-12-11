import React from 'react';

const PageWrapper = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {children}
        </div>
    );
};

export default PageWrapper;
