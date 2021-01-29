import React, { useContext } from 'react';

import { SongContext } from '../../SongContext';

import './Playlist.css';

const Playlist = () => {
    const { songs } = useContext(SongContext);

    return (
        <>
            {songs.map((song) => (
                <div className="playlist">
                    <div className="playlist__song">
                        <p>{song.title[0]}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Playlist;
