import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found__container">
      <div className="not-found-title__container">
        <h1>Error 404, Page not found.</h1>
      </div>
      <div className="not-found-description__container">
        <p>Woops! We could not found the page you are looking for.</p>
      </div>
    </div>
  );
};

export { NotFound };
