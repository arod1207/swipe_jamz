import './Album.css';

// album image placeholder //
import album1 from '../../Assets/Images/album1.jpg';

const Album = () => {
    return (
        <div className="album">
            <div className="album__cover">
                <img src={album1} alt="" />
            </div>
            <div className="album__name">
                <h2>Calm Down</h2>
            </div>
        </div>
    );
};

export default Album;
