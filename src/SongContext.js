import React, { useState, createContext } from 'react';
import axios from 'axios';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [songs, setSongs] = useState({});

    const searchHandler = (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: `${search}` },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setSongs(response.data.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        setSearch('');
    };

    const providerValue = { search, setSearch, songs, searchHandler };
    return (
        <SongContext.Provider value={providerValue}>
            {children}
        </SongContext.Provider>
    );
};

export default SongProvider;
