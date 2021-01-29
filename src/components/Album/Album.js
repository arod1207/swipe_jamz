import React, { useContext } from 'react';
import { SongContext } from '../../SongContext';
import './Album.css';

const Album = () => {
    const { songs } = useContext(SongContext);

    return (
        <>
            {songs.length > 0 &&
                songs.map((song) => (
                    <div className="album" key={song.id}>
                        <div className="album__cover">
                            <img src={song.album.cover_big} alt="" />
                        </div>
                        <div className="album__name">
                            <h3>{song.title}</h3>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Album;
