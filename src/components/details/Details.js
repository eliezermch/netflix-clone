import "./details.css";

const Details = ({ filmDetails }) => {
  let isAdult;
  if (filmDetails?.adult !== false) {
    isAdult = "🔞 +18";
  } else {
    isAdult = "";
  }

  const timeWithDecimals = filmDetails?.runtime / 60;
  const timeWithoutDecimals = timeWithDecimals.toFixed(1);

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-content__description">
          <div className="details-content__description-span">
            <span>📆{filmDetails?.release_date}</span>
            <span>⌛{timeWithoutDecimals} Hs.</span>
            <span>{isAdult}</span>
          </div>
          <p>{filmDetails?.overview}</p>
        </div>
        <div className="details-content__rated">
          <span className="details-content__rated-start">
            ⭐ {filmDetails?.vote_average}
          </span>
          <div className="details-content__description-genres">
            Genres:
            {filmDetails?.genres?.map((genre) => (
              <span key={genre.id}>🔴 {genre.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Details };
