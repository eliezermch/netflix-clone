import { RequestExceeded } from "../requestExceeded/RequestExceeded";
import "./banner.css";

const Banner = ({ film }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${film?.backdrop_path}`})`,
        backgroundPosition: "center",
      }}
    >
      {!film ? (
        <RequestExceeded />
      ) : (
        <div className="banner__content">
          <h1 className="banner__title">{film?.name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(film?.overview, 170)}
          </h1>
        </div>
      )}

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export { Banner };
