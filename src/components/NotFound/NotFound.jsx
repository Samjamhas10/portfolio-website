import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound__page">
      <h1>Uh oh, something went wrong.</h1>
      <p className="notfound__error">404 - Page Not Found</p>
      <a href="/" className="notfound__home-link">
        Go back to Home
      </a>
    </div>
  );
}

export default NotFound;
