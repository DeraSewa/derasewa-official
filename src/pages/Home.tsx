import "../styles/Home.css";
import googlePlayStore from "../assets/google-play-store.png";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="slogon">
                <div className="primary">HOST WITH EASE, FIND WITH JOY</div>
                <div className="secondary">Host and Discover Rooms and Apartments with Ease, Without the Broker Hassle</div>
            </div>
            <div className="play-store-link">
                <img src={googlePlayStore} alt="" />
                <div>
                    <div className="text-get-it-on">GET IT ON</div>
                    <div className="text-google-play">Google Play</div>
                </div>
            </div>
        </div>
    )
}

export default Home;