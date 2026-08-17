
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found__glow" />

      <div className="not-found__content">
        <span className="not-found__code">404</span>

        <p className="not-found__label">PAGE NOT FOUND</p>

        <h1>Looks like you took a wrong turn.</h1>

        <p className="not-found__description">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="not-found__actions">
          <a href="/" className="not-found__button">
            <span>←</span>
            Back to Home
          </a>

          <button
            className="not-found__back"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="not-found__grid" />
    </main>
  );
};

export default NotFound;

