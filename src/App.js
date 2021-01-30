import SearchBar from './components/SearchBar/SearchBar';
import Album from './components/Album/Album';
import Player from './components/Player/Player';
// import Playlist from './components/Playlist/Playlist';

import { SongProvider } from '../src/SongContext';
import { SkipProvider } from '../src/SkipContext';

import './App.css';

function App() {
    return (
        <SongProvider>
            <div className="app">
                <SearchBar />
                <SkipProvider>
                    <Album />
                    <Player />
                </SkipProvider>

                {/* <Playlist /> */}
            </div>
        </SongProvider>
    );
}

export default App;
