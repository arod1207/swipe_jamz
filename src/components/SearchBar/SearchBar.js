import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="searchbar__input">
                <input type="text" placeholder="Search" value="search" />
            </div>
        </div>
    );
};

export default SearchBar;
