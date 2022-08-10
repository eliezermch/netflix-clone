import { FilmCard } from "../filmCard/FilmCard";
import { RequestExceeded } from "../requestExceeded/RequestExceeded";
import "./row.css";

const url = `https://image.tmdb.org/t/p/w300`;

const Row = ({ title, style, items }) => {
  return (
    <div className="row">
      {title && <h2 className="row__title">{title}</h2>}

      <div className={`row__posters ${style}`}>
        {items === null ? (
          <RequestExceeded mode="error" />
        ) : (
          items &&
          items.map((film) => {
            return (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.name || film.title}
                image={film.image || `${url}${film.poster_path}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export { Row };
