import React, { useContext, useState } from 'react';
import { SongContext } from '../../SongContext';
import './Album.css';

const Album = () => {
    const { songs } = useContext(SongContext);
    const [currentSong, setCurrentSong] = useState(0);

    const song = songs[currentSong];

    if (!song) return null;

    return (
        <div className="album" key={song.id}>
            <div
                className="album__cover"
                onEnded={() => setCurrentSong((i) => i + 1)}
            >
                <img src={song.album.cover_big} alt="" />
            </div>
            <div className="album__name">
                <h3>{song.title}</h3>
            </div>
        </div>
    );
};

export default Album;
