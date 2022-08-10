import "./requestExceeded.css";

function RequestExceeded({ mode }) {
  return (
    <div className="request-exceeded__container">
      <h4>
        {mode === "exceeded"
          ? "Sorry, Api request exceeded."
          : "Sorry, An error occurred."}
      </h4>
    </div>
  );
}

export { RequestExceeded };
