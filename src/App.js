import SearchBar from './components/SearchBar/SearchBar';
import Album from './components/Album/Album';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';

import './App.css';

function App() {
    return (
        <div className="app">
            <SearchBar />
            <Album />
            <Player />
            <Playlist />
        </div>
    );
}

export default App;
