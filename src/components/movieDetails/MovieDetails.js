import { useEffect, useState } from "react";
import { Banner } from "../banner/Banner";
import { Details } from "../details/Details";
import "./movieDetails.css";

import { getFilmById } from "../../services/imdb";

function MovieDetails({ id, handleClick }) {
  const [stateFilmsDetails, setStateFilmsDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFilmById(id);
      setStateFilmsDetails(data);
    })();
  }, []);

  return (
    <div className="movie-details__container">
      <div className="movie-details-content">
        <Banner
          filmDetails={stateFilmsDetails}
          mode="modal"
          handleClick={handleClick}
        />
        <Details filmDetails={stateFilmsDetails} />
      </div>
    </div>
  );
}

export { MovieDetails };
