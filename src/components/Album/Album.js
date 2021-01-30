import React, { useContext } from 'react';
import { SongContext } from '../../SongContext';
import { SkipContext } from '../../SkipContext';

import TinderCard from 'react-tinder-card';

import './Album.css';

const Album = () => {
    const { songs } = useContext(SongContext);
    const { direction, setDirection } = useContext(SkipContext);

    const onSwipe = (direction) => {
        setDirection(direction);
    };

    return (
        <>
            {songs.length > 0 &&
                songs.map((song) => (
                    <TinderCard
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
                    </TinderCard>
                ))}
        </>
    );
};

export default Album;
