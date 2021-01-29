import { useContext } from 'react';
import { SongContext } from '../../SongContext';

import './SearchBar.css';

const SearchBar = () => {
    const { search, setSearch, searchHandler } = useContext(SongContext);

    return (
        <div className="searchbar">
            <form onSubmit={searchHandler}>
                <div className="searchbar__input">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
