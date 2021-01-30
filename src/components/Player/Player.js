import React, { useContext, useState } from 'react';
import { SongContext } from '../../SongContext';
import { SkipContext } from '../../SkipContext';

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';

import './Player.css';

const Player = () => {
    const { songs } = useContext(SongContext);
    const { direction } = useContext(SkipContext);
    const [currentSong, setCurrentSong] = useState(0);

    console.log('👦🏾', direction);

    const song = songs[currentSong];
    const nextSong = songs[currentSong + 1];

    console.log(nextSong);

    console.log(currentSong);

    if (!song) return null; // don't render the player when no song is available

    return (
        <div className="player">
            <AudioPlayer
                // autoPlay
                src={direction === 'right' ? nextSong.preview : song.preview}
                showSkipControls={true}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                onPlay={() => console.log('playing')}
                onEnded={() => setCurrentSong((i) => i + 1)}
                onClickNext={() => setCurrentSong((i) => i + 1)}
            />
        </div>
    );
};

export default Player;

/* <i class="fas fa-pause-circle fa-3x"></i> */
// }<i class="fas fa-play-circle fa-3x"></i>
// direction === 'right'
//                         ? nextSong.preview
//                         : direction === 'left '
//                         ? previousSong.preview
//                         : song.preview
