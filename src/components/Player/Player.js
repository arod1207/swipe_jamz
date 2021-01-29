import React, { useContext, useState } from 'react';

import { SongContext } from '../../SongContext';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.css';

const Player = () => {
    const { songs } = useContext(SongContext);
    // const [playing, setPlaying] = useState(false);
    console.log(songs.id);

    console.log(songs);

    return (
        <>
            {songs.length > 0 &&
                songs.map((song) => (
                    <div className="player" key={song.id}>
                        <AudioPlayer
                            // autoPlay
                            src={song.preview}
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            onPlay={(e) => console.log('playing')}

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
