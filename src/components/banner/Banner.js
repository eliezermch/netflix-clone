import { RequestExceeded } from "../requestExceeded/RequestExceeded";

import { getTrailerFilmsId, getYoutubeTrailerFilms } from "../../services/imdb";

import iconX from "../../assets/images/icons/icon-x.png";
import "./banner.css";
import { useState } from "react";

const Banner = ({ id, film, filmDetails, mode, handleClick }) => {
  const [stateTrailers, setStateTrailers] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const image =
    filmDetails?.backdrop_path !== null
      ? filmDetails?.backdrop_path
      : filmDetails?.poster_path;

  const handleTrailer = async () => {
    const dataId = await getTrailerFilmsId(id);
    const data = await getYoutubeTrailerFilms(dataId.videoId);
    setStateTrailers(data);
  };

  return stateTrailers.length !== undefined ? (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
          film?.backdrop_path || image
        }`})`,
        backgroundPosition: "center",
      }}
    >
      {mode === "modal" && (
        <div className="banner_exit-container">
          <button className="banner__exit-button" onClick={handleClick}>
            <img src={iconX} alt="exit button" />
          </button>
        </div>
      )}
      {!film && !filmDetails ? (
        <RequestExceeded mode="exceeded" />
      ) : (
        <div
          className={`banner__content ${
            mode === "modal" && "banner__content-modal"
          }`}
        >
          <h1
            className={`banner__title ${
              mode === "modal" && "banner__title-modal"
            }`}
          >
            {film?.name || filmDetails?.original_title}
          </h1>
          <div
            className={`banner__buttons ${
              mode === "modal" && "banner__buttons-modal"
            }`}
          >
            {mode === "default" ? (
              <button className="banner__button">Play</button>
            ) : (
              <button className="banner__button" onClick={handleTrailer}>
                Play
                <a href={stateTrailers}></a>
              </button>
            )}

            <button className="banner__button">My List</button>
          </div>
          {mode !== "modal" ? (
            <h1 className="banner__description">
              {truncate(film?.overview, 170)}
            </h1>
          ) : (
            <h1 className="banner__description-modal">
              {filmDetails?.tagline}
            </h1>
          )}
        </div>
      )}

      <div
        className={`banner--fadeBottom ${
          mode === "modal" && "banner--fadeBottom-modal"
        }`}
      ></div>
    </header>
  ) : (
    <>
      {stateTrailers.videoId === null ? (
        <div className="request-exceeded_banner-modal">
          <RequestExceeded />
          <div className="banner_exit-container banner_exit-container-video">
            <button
              className="banner__exit-button banner__exit-button-video"
              onClick={handleClick}
            >
              <img src={iconX} alt="exit button" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <video controls className="banner__trailers">
            <source src={stateTrailers?.videos[2]?.url} type="" />
          </video>
          <div className="banner_exit-container banner_exit-container-video">
            <button
              className="banner__exit-button banner__exit-button-video"
              onClick={handleClick}
            >
              <img src={iconX} alt="exit button" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { Banner };
