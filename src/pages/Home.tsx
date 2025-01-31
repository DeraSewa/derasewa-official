import "../styles/Home.css";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="slogon">
                <div className="primary">HOST WITH EASE, FIND WITH JOY</div>
                <div className="secondary">Host and Discover Rooms and Apartments with Ease, Without the Broker Hassle</div>
            </div>
            <div className="play-store-link">
                <i className="fa-brands fa-google-play"></i>
                <div>
                    <div className="text-get-it-on">GET IT ON</div>
                    <div className="text-google-play">Google Play</div>
                </div>
            </div>
        </div>
    )
}

export default Home;