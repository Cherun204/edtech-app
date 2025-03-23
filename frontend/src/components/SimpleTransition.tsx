import React, { useEffect, useState } from 'react';
import './SimpleTransition.css';

const SimpleTransition: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className={`transition-container ${visible ? 'visible' : ''}`}>
            <h1>Welcome to Gradcredit</h1>
        </div>
    );
};

export default SimpleTransition;