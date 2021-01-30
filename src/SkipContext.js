import React, { useState, createContext } from 'react';

export const SkipContext = createContext();

export const SkipProvider = ({ children }) => {
    const [direction, setDirection] = useState('');

    const providerValue = { direction, setDirection };
    return (
        <SkipContext.Provider value={providerValue}>
            {children}
        </SkipContext.Provider>
    );
};

export default SkipProvider;
