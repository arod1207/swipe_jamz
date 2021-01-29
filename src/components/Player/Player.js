import React, { useContext, useState } from 'react';

import { SongContext } from '../../SongContext';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.css';

const Player = () => {
    const { songs } = useContext(SongContext);
    const [currentSong, setCurrentSong] = useState(0);

    const song = songs[currentSong];

    if (!song) return null; // don't render the player when no song is available

    return (
        <div className="player">
            <AudioPlayer
                autoPlay
                src={song.preview}
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                onPlay={() => console.log('playing')}
                onEnded={() => setCurrentSong((i) => i + 1)}
            />
        </div>
    );
};

export default Player;

/* <i class="fas fa-pause-circle fa-3x"></i> */
// }<i class="fas fa-play-circle fa-3x"></i>
