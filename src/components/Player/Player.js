import React, { useContext } from 'react';
import { SongContext } from '../../SongContext';
import { SkipContext } from '../../SkipContext';

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

const Player = () => {
    const { songs } = useContext(SongContext);
    const { currentSong, setCurrentSong } = useContext(SkipContext);

    const song = songs[currentSong];

    return (
        <div className="player">
            {!song ? (
                <AudioPlayer
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    showJumpControls={false}
                ></AudioPlayer>
            ) : (
                <AudioPlayer
                    // autoPlay
                    src={song.preview}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    onPlay={() => console.log('playing')}
                    onEnded={() => setCurrentSong((i) => i + 1)}
                    showJumpControls={false}
                />
            )}
        </div>
    );
};

export default Player;

/* <i class="fas fa-pause-circle fa-3x"></i> */
// }<i class="fas fa-play-circle fa-3x"></i>
