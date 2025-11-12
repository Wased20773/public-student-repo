import React from "react";
import SteamPNG from "../assets/steam.png";
import IGDBPNG from "../assets/igdb.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <h1 className="hero-title">Games Dashboard</h1>
        <h2 className="hero-text">Over 500,000 games from API's</h2>
      </div>

      <h3 style={{ textAlign: "center" }}>API's that are in place</h3>

      <div className="cards-container">
        <div className="cards-api steam-theme">
          <div className="cards-api-heading">
            <img
              src={SteamPNG}
              width={"50px"}
              alt="game logo for Steam Web API"
            />
            <h3 className="cards-api-h3">Steam Web API</h3>
          </div>
          <p className="cards-api-text">
            Provides public data such as game details, store listings, sales,
            and featured games. Also offers private data (friends, owned games,
            etc.) with an API key, but only public data is used here.{" "}
          </p>
        </div>
        <div className="cards-api igdb-theme">
          <div className="cards-api-heading">
            <img
              src={IGDBPNG}
              width={"50px"}
              alt="game logo for Steam Web API"
              style={{ borderRadius: "50%" }}
            />
            <h3 className="cards-api-h3">Internet Game Database</h3>
          </div>
          <p className="cards-api-text">
            A comprehensive game database offering detailed metadata such as
            game modes, release dates, supported platforms, and time-to-beat
            statistics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
