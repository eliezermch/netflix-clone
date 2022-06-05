import plusIcon from "../../assets/images/icons/plus.png";
import likeIcon from "../../assets/images/icons/like.png";
import playIcon from "../../assets/images/icons/play.png";
import expandArrowIcon from "../../assets/images/icons/expand-arrow.png";
import "./filmCard.css";

function FilmCard({ title, image = { url: "" } }) {
  let imageUrl = image.url;

  // Set new size
  if (image.size) {
    const separateUrl = image.url.split("/");
    if (separateUrl[4] === "original") {
      separateUrl[4] = image.size;
      imageUrl = separateUrl.join("/");
    }
  }

  return (
    <div className="row__poster-container">
      <figure className="row__poster">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="row__content">
        <div className="row__content-controls">
          <div className="row__controls-left">
            <button className="row__poster-btn white-version">
              <img src={playIcon} alt="Play icon" />
            </button>
            <button className="row__poster-btn">
              <img src={plusIcon} alt="Add to my list icon" />
            </button>
            <button className="row__poster-btn">
              <img src={likeIcon} alt="Like icon" />
            </button>
          </div>
          <div className="row__controls-right">
            <button className="row__poster-btn">
              <img src={expandArrowIcon} alt="Expand icon" />
            </button>
          </div>
        </div>
        <h5 className="row__content-title">{title}</h5>
      </div>
    </div>
  );
}

export { FilmCard };
