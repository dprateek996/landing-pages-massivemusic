import React from 'react';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="py-20 bg-green-500 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to start?</h2>
            <Button variant="secondary">Contact Us</Button>
        </section>
    );
};

export default CTASection;
