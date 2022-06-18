import { RequestExceeded } from "../requestExceeded/RequestExceeded";
import iconX from "../../assets/images/icons/icon-x.png";
import "./banner.css";

const Banner = ({ film, filmDetails, mode, handleClick }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const image =
    filmDetails?.backdrop_path !== null
      ? filmDetails?.backdrop_path
      : filmDetails?.poster_path;

  return (
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
        <RequestExceeded />
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
            <button className="banner__button">Play</button>
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
  );
};

export { Banner };
