import Album from './components/Album/Album';

import './App.css';
import Player from './components/Player/Player';

function App() {
    return (
        <div className="app">
            <Album />
            <Player />
            {/* next song  */}
        </div>
    );
}

export default App;
