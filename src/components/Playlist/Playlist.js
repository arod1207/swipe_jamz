import React, { useContext } from 'react';

import { SkipContext } from '../../SkipContext';
import { SongContext } from '../../SongContext';

import './Playlist.css';

const Playlist = () => {
    const { songs } = useContext(SongContext);
    const { currentSong } = useContext(SkipContext);

    console.log(songs);

    const song = songs[currentSong + 1];

    return (
        <div className="playlist">
            <div className="playlist__song">
                {song && <p>{`Next Song : ${song.title}`}</p>}
            </div>
        </div>
    );
};

export default Playlist;
