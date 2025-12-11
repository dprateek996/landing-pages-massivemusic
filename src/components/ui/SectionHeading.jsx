import React from 'react';

const SectionHeading = ({ children, className = '' }) => {
    return (
        <h2 className={`text-4xl font-bold mb-8 ${className}`}>
            {children}
        </h2>
    );
};

export default SectionHeading;
