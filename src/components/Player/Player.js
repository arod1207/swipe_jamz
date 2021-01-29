import React, { useContext } from 'react';

import { SongContext } from '../../SongContext';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.css';

import Song from '../../Assets/Songs/Elvis_Presley_Jailhouse_Rock.mp3';

const Player = () => {
    const { songs } = useContext(SongContext);

    return (
        <>
            {songs.map((song) => (
                <div className="player">
                    <AudioPlayer
                        // autoPlay
                        // src={song.preview}
                        showJumpControls={false}
                        customVolumeControls={[]}
                        customAdditionalControls={[]}
                        onPlay={(e) => console.log('onPlay')}
                        // other props here
                    />
                </div>
            ))}
        </>
    );
};
export default Player;

/* <i class="fas fa-pause-circle fa-3x"></i> */
// }<i class="fas fa-play-circle fa-3x"></i>
