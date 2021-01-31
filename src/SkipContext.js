import React, { useState, createContext } from 'react';

export const SkipContext = createContext();

export const SkipProvider = ({ children }) => {
    const [direction, setDirection] = useState('');
    const [currentSong, setCurrentSong] = useState(0);

    const providerValue = {
        direction,
        setDirection,
        currentSong,
        setCurrentSong,
    };
    return (
        <SkipContext.Provider value={providerValue}>
            {children}
        </SkipContext.Provider>
    );
};

export default SkipProvider;
