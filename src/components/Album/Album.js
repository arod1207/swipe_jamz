import React, { useContext } from 'react';
import { SongContext } from '../../SongContext';
import { SkipContext } from '../../SkipContext';

import SwipeCard from 'react-tinder-card';

import './Album.css';

const Album = () => {
    const { songs } = useContext(SongContext);
    const { setDirection, currentSong, setCurrentSong } = useContext(
        SkipContext
    );

    console.log(currentSong);

    const onSwipe = (direction) => {
        setDirection(direction);
        if (direction === 'right') {
            setCurrentSong((i) => i + 1);
        } else if (direction === 'left') {
            setCurrentSong((i) => i - 1);
        }
    };

    return (
        <>
            {songs.length > 0 &&
                songs.map((song) => (
                    <SwipeCard
                        key={song.id}
                        onSwipe={onSwipe}
                        preventSwipe={['up', 'down']}
                    >
                        <div className="album">
                            <div className="album__cover">
                                <img src={song.album.cover_big} alt="" />
                            </div>
                            <div className="album__name">
                                <h3>{song.title}</h3>
                            </div>
                        </div>
                    </SwipeCard>
                ))}
        </>
    );
};

export default Album;
