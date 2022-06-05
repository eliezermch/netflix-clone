import { FilmCard } from "../filmCard/FilmCard";
import { RequestExceeded } from "../requestExceeded/RequestExceeded";
import "./row.css";

const Row = ({ title, style, items }) => {
  return (
    <div className="row">
      {title && <h2 className="row__title">{title}</h2>}

      <div className={`row__posters ${style}`}>
        {items === null ? (
          <RequestExceeded />
        ) : (
          items &&
          items.map((film) => {
            return (
              <FilmCard
                key={film.id}
                title={film.fullTitle || film.title}
                image={{ url: film.image }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export { Row };
